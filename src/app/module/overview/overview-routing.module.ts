import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview.component';


const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        data: {
            title: 'Overview',
            urls: [
                { title: 'Overview', url: '/' },
            ]
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OverviewRoutingModule {
}
