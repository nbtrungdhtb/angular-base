import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

interface LoginResponseData {
    status: boolean;
    message: string;
    token: any;
}


@Injectable({
    providedIn: 'root'
})


export class AuthenticationService {

    private loggedInStatus = !!localStorage.getItem('jwt');
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
    }

    get isLoggedIn() {
        return this.loggedInStatus.toString();
    }

    setJwtToken(token) {
        localStorage.setItem('jwt', token);
        this.loggedInStatus = true;
    }

    getAuthorizationToken(): string {
        if (localStorage.hasOwnProperty('jwt')) {
            return localStorage.getItem('jwt');
        }
        return '';
    }

    getUser() {
        return this.http.get<LoginResponseData>(environment.auth_endpoint + '/user/me', {});
    }

    login(username, password) {
        const payload = JSON.stringify({'username': username, 'password': password});
        return this.http.post<LoginResponseData>(environment.auth_endpoint + '/user/login', payload);
    }

    logout() {
        this.http.get(environment.auth_endpoint + '/user/logout');
        localStorage.removeItem('at_jwt');
        this.loggedInStatus = false;
    }
}
