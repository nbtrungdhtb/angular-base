import {AfterViewInit, Component} from '@angular/core';
import * as c3 from 'c3';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html'
})
export class ChartsComponent implements AfterViewInit {

    constructor() {
    }

    ngAfterViewInit() {
        this.generateChart();
    }

    generateChart() {
        c3.generate({
            bindto: '#chart_line',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ],
                type: 'area-spline'
            }
        });
    }

}
