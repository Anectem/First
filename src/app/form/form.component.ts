import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    constructor(private translate: TranslateService) {}

    dataArray: string[] = [];
    text: string = '';
    noValue:string='';

    filterInput(value: string) {
        let numb = value.match(/\d/g);
        if (numb !== null) {
            let value = numb.join('');
            return value
        } else if (value == '') {
            return (false)
        }
        return('No value');
    }

    changeHandler() {
        let numb = this.filterInput(this.text);
        if (numb) {
            this.dataArray.push(numb);
        }
        this.text = '';

    }
}
