import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {BreadcrumbsComponent} from './src/breadcrumbs/breadcrumbs.component';

export * from './src/breadcrumbs/breadcrumbs.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        BreadcrumbsComponent
    ],
    exports: [
        BreadcrumbsComponent
    ]
})
export class CornCodeModule {
}
