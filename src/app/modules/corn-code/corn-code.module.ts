import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CCBreadcrumbsComponent} from '../cc-breadcrumbs/cc-breadcrumbs.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        CCBreadcrumbsComponent
    ],
    exports: [
        CCBreadcrumbsComponent
    ]
})
export class CornCodeModule {
}
