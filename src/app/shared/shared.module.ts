import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import { ControlMessageComponent } from './control-message/control-message.component';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        ControlMessageComponent
    ],
    exports: [
        BreadcrumbComponent,
        ControlMessageComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {
}
