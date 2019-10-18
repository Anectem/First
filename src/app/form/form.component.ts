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

    changeHandler() {
        if (this.text) {
            this.dataArray.push(this.text);
        }
        this.text = '';

    }
}
