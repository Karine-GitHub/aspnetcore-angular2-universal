import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

import { TabsModule } from 'ngx-bootstrap';
import { SharedModule } from "../../../modules/shared.module";

@NgModule({
  declarations: [LazyComponent],
  imports: [
    SharedModule,
    TabsModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' }
    ])
  ]
})
export class LazyModule {

}
