import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CornCodeComponent} from './corncode.component';
import {CCBreadcrumbsComponent} from './components/cc-breadcrumbs/cc-breadcrumbs.component';

@NgModule({
    declarations: [
        CornCodeComponent,
        CCBreadcrumbsComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        CCBreadcrumbsComponent
    ],
    providers: [],
    bootstrap: [CornCodeComponent]
})
export class CornCodeModule {
}
