import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('guard');
        if ('a' === 'a') {
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

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }


}
