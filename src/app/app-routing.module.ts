import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';
import {AuthenticationGuard} from './authentication/authentication.guard';
import {AuthenticationService} from './authentication/authentication.service';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';

export const routes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthenticationGuard],
        children: [
            {
                path: '',
                redirectTo: '/overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                loadChildren: () => import('./module/overview/overview.module').then(m => m.OverviewModule)
            }
        ]
    },
    {
        path: '',
        component: BlankComponent,
        children: [
            {
                path: 'authentication',
                loadChildren:
                    () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes, {enableTracing: false /* <-- debugging purposes only */ }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
