import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        .login-container {
            background:url(../../../assets/images/background/profile-bg.jpg) no-repeat center center;
            background-size: cover;
        }
        .btn-login {
            background: -webkit-linear-gradient(right, #00dbde, #fc00ff);
            border: none;
            border-radius: 30px;
            transition: all 0.4s;
        }
        .btn-login:hover {
            -webkit-box-shadow: 0 5px 30px 0 rgba(3, 216, 222, 0.2);
        }
    `]
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
