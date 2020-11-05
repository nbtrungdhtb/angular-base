import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StarterComponent} from './starter.component';


const routes: Routes = [
    {
        path: '',
        component: StarterComponent,
        data: {
            title: 'Started',
            urls: [
                { title: 'Started', url: '/' },
            ]
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StarterRoutingModule {
}
