import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {CCBreadcrumbsComponent} from './src/breadcrumbs/breadcrumbs.component';

export * from './src/breadcrumbs/breadcrumbs.component';

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
