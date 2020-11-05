import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import { NotifySweet2Component } from './notify-sweet2/notify-sweet2.component';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        NotifySweet2Component
    ],
    exports: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {
}
