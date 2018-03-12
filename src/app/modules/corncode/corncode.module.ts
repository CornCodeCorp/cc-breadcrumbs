import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CcBreadcrumbsComponent} from '../cc-breadcrumbs/cc-breadcrumbs.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CcBreadcrumbsComponent
    ],
    exports: [
        CcBreadcrumbsComponent
    ]
})
export class CornCodeModule {
}
