import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';

export const routes: Routes = [
    {
        path: '',
        component: FullComponent,
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
                path: 'authentication',
                loadChildren:
                    () => import('./auth/auth.module').then(m => m.AuthModule)
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
