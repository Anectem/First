import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

export type Ilang ={
    lang:string,
    active:boolean
}
@Injectable()

export class LangService {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    };

    public Language : Ilang[]= [
        {
            lang: 'en',
            active: true
        }, {
            lang: 'ru',
            active: false
        }
    ];

    changeLanguage(language: Ilang) {
        this.translate.use(language.lang);
        if (this.translate.currentLang === language.lang){
            this
        }
    }
}
