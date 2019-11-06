import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";


@Injectable()

export class LangService {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
    };

    public languages: string [] = this.translate.getLangs();


    getDefaultLanguage (languages:string[]){
       for (let i=0; i<languages.length; i++){
           if (languages[i] === this.translate.defaultLang ){
               return languages[i]
           }
       }
    };

    changeLanguage(language: string) {
        this.translate.use(language);
    }
}
