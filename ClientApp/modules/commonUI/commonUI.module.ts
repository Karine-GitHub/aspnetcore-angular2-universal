import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxEchartsModule } from './../ngxEcharts/ngx-echarts.module';
import { PieChartComponent } from "./charts/pieChart.component";

@NgModule({
  declarations: [
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule
  ],
  exports: [
    PieChartComponent
  ],
  providers: [
  ],
  entryComponents: [
    PieChartComponent
  ]
})

export class CommonUIModule {

}
