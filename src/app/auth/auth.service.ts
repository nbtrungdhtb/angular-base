import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

interface ResponseData {
    status_code: number;
    message: string;
    data: any;
    total: any;
}

interface LoginResponseData {
    status_code: number;
    message: string;
    token: any;
}


@Injectable({
    providedIn: 'root'
})


export class AuthService {
    private loggedInStatus = !!localStorage.getItem('at_jwt');

    constructor(private http: HttpClient) {
    }

    get isLoggedIn() {
        return this.loggedInStatus.toString();
    }

    setJwtToken(token) {
        localStorage.setItem('at_jwt', token);
        this.loggedInStatus = true;
    }

    getAuthorizationToken(): string {
        if (localStorage.hasOwnProperty('at_jwt')) {
            return localStorage.getItem('at_jwt');
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
