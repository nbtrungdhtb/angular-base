import {Routes} from '@angular/router';
import {NotfoundComponent} from './404/not-found.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: NotfoundComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            }
        ]
    }
];
