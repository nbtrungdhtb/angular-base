import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string = null;
    password: string = null;
    errorMessage: string = null;
    isLoading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
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
    }
    login = () => {
        if (!this.isLoading) {
            if (this.username && this.password) {
                this.isLoading = true;
                const payload = {
                    username: 'admin',
                    password: 'admin'
                };
                this.authenticationService.login(payload).subscribe(
                    (response) => {
                    this.isLoading = false;
                    if (response.status) {
                        this.authenticationService.setJwtToken(response.token);
                        window.location.reload();
                    } else {
                        this.errorMessage = 'Thông tin tài khoản hoặc mật khẩu không chính xác';
                    }
                },
                    () => {
                        this.isLoading = false;
                        alert('Có lỗi bất ngờ xảy ra');
                    }
                );
            } else {
                this.errorMessage = 'Bạn cần điền đầy đủ thông tin';
            }
        }
    }
}
