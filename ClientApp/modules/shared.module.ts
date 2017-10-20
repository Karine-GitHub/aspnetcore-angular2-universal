import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUIModule } from "./commonUI/commonUI.module";


@NgModule({
    imports: [
        CommonModule,
        CommonUIModule
    ],
    exports: [
        CommonModule,
        CommonUIModule
    ]
})

export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
