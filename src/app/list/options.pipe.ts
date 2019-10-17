import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Pipe({
    name: 'translatePipe',
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(private translate: TranslateService) {
    }

    transform(array: any, start?: any, end?: any): any {
        let pipeArray: string[] = [];
        if (array !== null) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].match(/\D/)) {
                    let newElem = this.translate.instant('demo.noValue');
                    pipeArray.push(newElem);
                } else {
                    pipeArray.push(array[i])
                }
            }
        }
        return pipeArray
    }
}

