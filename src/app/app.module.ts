import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {TranslatePipe} from './list/options.pipe';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [AppComponent, FormComponent, ListComponent, TranslatePipe],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

