import { Component, Input, ViewChild} from '@angular/core';
import { NgxEchartsDirective } from "../../ngxEcharts/ngx-echarts.directive";

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.scss']
})
export class PieChartComponent {
  @Input() chartOption: {};
  @ViewChild('chart') public chart: NgxEchartsDirective;

  constructor() {}

  public resizeChart(): void {
    console.log("Call resize on chart");
    this.chart.resize();
  }
}
