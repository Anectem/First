import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ArrayDataService} from "../../services/array-data.service";
import {LangService} from "../../services/lang.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormComponent {
    constructor(private translate: TranslateService,
                private arrayData: ArrayDataService,
                private lang: LangService) {
    };

    public text: string;

    addData(text: string) {
        this.arrayData.addData(text);
        this.text = ''
    }
}
