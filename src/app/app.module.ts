import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {TranslatePipe} from '../pipes/translate.pipe';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ArrayDataService} from "../services/array-data.service";
import { SelectComponent } from './select/select.component';


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
    declarations: [AppComponent, FormComponent, TableComponent, TranslatePipe, SelectComponent],
    bootstrap: [AppComponent],
    providers: [ArrayDataService]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

