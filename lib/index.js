import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CCBreadcrumbsComponent } from './src/cc-breadcrumbs/cc-breadcrumbs.component';
export * from './src/cc-breadcrumbs/cc-breadcrumbs.component';
var CornCodeModule = (function () {
    function CornCodeModule() {
    }
    return CornCodeModule;
}());
export { CornCodeModule };
CornCodeModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CornCodeModule.ctorParameters = function () { return []; };
