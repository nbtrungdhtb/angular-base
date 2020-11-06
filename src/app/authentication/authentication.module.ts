import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './authentication.routing';
import {LoginComponent} from './login/login.component';
import {NotfoundComponent} from './404/not-found.component';
import {AuthenticationService} from './authentication.service';
import {BreadcrumbService} from '../shared/breadcrumb/breadcrumb.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        LoginComponent,
        NotfoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        AuthenticationService,
        BreadcrumbService
    ]
})
export class AuthenticationModule {
}
