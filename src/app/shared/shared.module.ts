import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import { ControlMessageComponent } from './control-message/control-message.component';
import { DateRangeDirective } from './daterange-picker/date-range.directive';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        ControlMessageComponent,
        DateRangeDirective
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
