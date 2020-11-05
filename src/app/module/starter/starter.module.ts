import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarterComponent} from './starter.component';
import {StarterRoutingModule} from './starter-routing.module';


@NgModule({
    imports: [
        CommonModule,
        StarterRoutingModule
    ],
    declarations: [
        StarterComponent
    ]
})
export class StarterModule {
}
