import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../shared/control-message/validation.service';
import {NotificationService} from '../../service/notification.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    isLoading = false;

    loginForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService
    ) {
        this.route.queryParams
            .subscribe(params => {
                if (params.code && params.code !== '') {
                    this.authenticationService.setJwtToken(params.code);
                    window.location.href = window.location.pathname;
                } else {
                    if (this.authenticationService.getAuthorizationToken()) {
                        this.router.navigate(['/']).then();
                    }
                }
            });
        this.createForm();
    }

    createForm = (): void => {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3), ValidationService.specialCharacters]],
            password: ['', [Validators.required, ValidationService.passwordValidator]],
            remember: [true, Validators.required]
        });
    }

    login = () => {
        if (!this.isLoading) {
            if (this.loginForm.dirty && this.loginForm.valid) {
                this.isLoading = true;
                const payload = {
                    username: this.loginForm.value.username,
                    password: this.loginForm.value.password
                };
                this.authenticationService.login(payload).subscribe(
                    (response) => {
                    this.isLoading = false;
                    if (response.success) {
                        this.authenticationService.setJwtToken(response.token);
                        window.location.reload();
                    } else {
                        this.notificationService.notifyError('Thông tin tài khoản hoặc mật khẩu không chính xác');
                    }
                },
                    () => {
                        this.isLoading = false;
                        this.notificationService.notifyError('Có lỗi bất ngờ xảy ra');
                    }
                );
            }
        }
    }

    onSignIn = (e) => {
        e.preventDefault();
        const client_id = environment.google_client_id;
        const google_redirect_url = environment.google_redirect_url;
        // Document about prompt param: https://developers.google.com/identity/protocols/OpenIDConnect#re-consent

        // tslint:disable-next-line:max-line-length
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${client_id}&redirect_uri=${google_redirect_url}&scope=email%20profile&prompt=select_account%20consent`;
    }
}
