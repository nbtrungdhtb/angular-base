import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('guard');
        if (this.authenticationService.isLoggedIn === 'true') {
            return true;
        }

        this.router.navigate(['auth/login']);
        return false;
        /*return this.user.isLoggedIn().pipe(map(res => {
          if (res.status) {
            this.auth.setLoggedIn(true);
            return true;
          }
          this.router.navigate(['auth/google-login']);
          return false;
        }));*/
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authenticationService.isLoggedIn === 'true') {
            return true;
        }
        this.router.navigate(['/authentication/login']).then();
        return false;
    }


}
