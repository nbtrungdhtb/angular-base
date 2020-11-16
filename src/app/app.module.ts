import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    CommonModule
} from '@angular/common';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';

import {NavigationComponent} from './shared/header-navigation/navigation.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpinnerComponent} from './shared/spinner.component';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SharedModule} from './shared/shared.module';
import {AuthenticationGuard} from './authentication/authentication.guard';
import {TokenInterceptor} from './_helper';
import {AuthenticationService} from './authentication/authentication.service';
import {BreadcrumbService} from './shared/breadcrumb/breadcrumb.service';
import {ErrorInterceptor, SentryErrorHandler} from './_helper';
import {environment} from '../environments/environment';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        BlankComponent,
        NavigationComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        PerfectScrollbarModule,
        AppRoutingModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        AuthenticationService,
        BreadcrumbService,
        AuthenticationGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        environment['sentry_enable'] ? {provide: ErrorHandler, useClass: SentryErrorHandler} : [],
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
