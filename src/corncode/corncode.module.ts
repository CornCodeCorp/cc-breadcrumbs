import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {CornCodeComponent} from './corncode.component';
import {CCBreadcrumbsComponent} from './components/cc-breadcrumbs/cc-breadcrumbs.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: CornCodeComponent}
        ]),
        BrowserModule
    ],
    declarations: [
        CornCodeComponent,
        CCBreadcrumbsComponent
    ],
    exports: [
        CCBreadcrumbsComponent
    ],
    providers: [],
    bootstrap: [CornCodeComponent]
})
export class CornCodeModule {
}
