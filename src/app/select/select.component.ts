import {Component} from '@angular/core';
import { LangService} from "../../services/lang.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent  {
    languages: string[];
    constructor(private lang: LangService,
                private translate: TranslateService) {
        this.languages = this.lang.languages;
    }
    changeLanguage(elem: string) {
        this.lang.changeLanguage(elem);
    }
    getDefaultLanguage(languages:string[]){
        return this.lang.getDefaultLanguage(languages)

    }
}
