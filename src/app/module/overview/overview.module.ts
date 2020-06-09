import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {OverviewRoutingModule} from './overview-routing.module';


@NgModule({
    declarations: [
        OverviewComponent,
        ChartsComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        OverviewRoutingModule
    ]
})
export class OverviewModule {
}
