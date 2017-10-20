import { NgModule } from '@angular/core';

import { NgxEchartsDirective } from './ngx-echarts.directive';

export * from './ngx-echarts.directive';

@NgModule({
  declarations: [
    NgxEchartsDirective
  ],
  exports: [
    NgxEchartsDirective
  ]
})

export class NgxEchartsModule {
}
