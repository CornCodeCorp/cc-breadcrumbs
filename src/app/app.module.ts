import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CornCodeModule} from './modules/corn-code/corn-code.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CornCodeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
