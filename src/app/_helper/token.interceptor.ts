import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../authentication/authentication.service';
import {Observable} from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.headers.has('Authorization')) {
            return next.handle(req);
        }

        const authenticationToken = this.authenticationService.getAuthorizationToken();

        let authenticationRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer'${authenticationToken}`).set('Content-Type', 'application/json')
        });

        if (req.headers.has('Content-Type')) {
            authenticationRequest = req.clone({
                headers: req.headers.set('Authorization', `Bearer${authenticationToken}`)
            });
        }

        return next.handle(authenticationRequest);
    }

}
