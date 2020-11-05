import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        BreadcrumbComponent
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
