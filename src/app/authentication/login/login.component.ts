import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: string = null;
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
            if (this.userName && this.password) {
                this.isLoading = true;
            }
        } else {

        }
    }
}
