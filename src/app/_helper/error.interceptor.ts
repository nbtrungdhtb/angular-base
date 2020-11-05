import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from '../authentication/authentication.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private auth: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.auth.logout();
                location.reload(true);
            }

            const error = err.error.error || err.statusText;
            return throwError(error);
        }));
    }
}
