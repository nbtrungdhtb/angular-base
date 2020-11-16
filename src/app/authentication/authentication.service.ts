import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


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
        return this.http.get<LoginResponseData>(environment.endpoint + '/user/me', {});
    }

    login = ({username, password}): Observable<LoginResponseData> => {
        const payload = JSON.stringify({username, password});
        return this.http.post<LoginResponseData>(environment.endpoint + '/user/login', payload);
    }

    logout = (): void => {
        this.http.get(environment.endpoint + '/user/logout');
        localStorage.removeItem('jwt');
        this.loggedInStatus = false;
    }

    createUser = (data): Observable<ResponseDataRegister> => {
        return this.http.post<ResponseDataRegister>(environment.endpoint + '/user/register', JSON.stringify(data))
    }
}
