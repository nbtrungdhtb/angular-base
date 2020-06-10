import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from "./auth/auth.service";
import {BreadcrumbComponent} from "./shared/breadcrumb/breadcrumb.component";

export const routes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: '/overview', pathMatch: 'full' },
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
                path: 'auth',
                loadChildren:
                    () => import('./auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/auth/404'
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes, {enableTracing: false /* <-- debugging purposes only */ }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
