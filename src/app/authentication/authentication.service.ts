import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})


export class AuthenticationService {

    private loggedInStatus = !!localStorage.getItem('jwt');

    constructor(private http: HttpClient) {}

    get isLoggedIn() { return this.loggedInStatus.toString(); }

    setJwtToken = (token) => {
        localStorage.setItem('jwt', token);
        this.loggedInStatus = true;
    }

    getAuthorizationToken = (): string => {
        if (localStorage.hasOwnProperty('jwt')) {
            return localStorage.getItem('jwt');
        }
        return null;
    }

    getUser = (): object => {
        return this.http.get<LoginResponseData>(environment.auth_endpoint + '/user/me', {});
    }

    login = ({username, password}) => {
        const payload = JSON.stringify({username, password});
        return this.http.post<LoginResponseData>(environment.auth_endpoint + '/user/login', payload);
    }

    logout = (): void => {
        this.http.get(environment.auth_endpoint + '/user/logout');
        localStorage.removeItem('jwt');
        this.loggedInStatus = false;
    }
}
