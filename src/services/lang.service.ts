import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
    providedIn: 'root',
})
export class LangService {
    constructor(private translate: TranslateService) {
    };

    public language = {
        ru: 'ru',
        en: 'en'
    };

    useLanguage(language: string) {
        this.translate.use(language);
    }

    activeLang(lang: string) {
        if (this.translate.currentLang === lang) {
            return '#cbe3ff'
        } else if (this.translate.currentLang === undefined && this.translate.defaultLang === lang) {
            return '#cbe3ff'
        }
        return '#f3f3f0'

    }
}
