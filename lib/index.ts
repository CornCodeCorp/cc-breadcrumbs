import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {CCBreadcrumbsComponent} from './src/cc-breadcrumbs/cc-breadcrumbs.component';

export * from './src/cc-breadcrumbs/cc-breadcrumbs.component';

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
