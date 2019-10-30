import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Pipe({
    name: 'translatePipe',
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(private translate: TranslateService) {
    }
    transform(string: any, start?: any, end?: any): any {
        let numb = string.match(/\d/g);
        let newElem = this.translate.instant('noValue');

        if (numb !== null) {
            let value = numb.join('');
            return value;
        }
        return (newElem);
    }

}

