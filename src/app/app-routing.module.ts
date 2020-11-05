import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';
import {AuthenticationGuard} from './authentication/authentication.guard';

export const routes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthenticationGuard],
        canActivateChild: [AuthenticationGuard],
        children: [
            {path: '', redirectTo: '/start', pathMatch: 'full'},
            {path: 'start', loadChildren: () => import('./module/starter/starter.module').then(m => m.StarterModule)}
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
    imports: [
        RouterModule.forRoot(routes, {enableTracing: false /* <-- debugging purposes only */ })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
