import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ArrayDataService, iTextData} from "../../services/array-data.service";
import {LangService} from "../../services/lang.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LangService]
})

export class FormComponent {
    constructor(private translate: TranslateService,
                private arrayData: ArrayDataService,
    ) {
    }

    public text: string;
    public array: iTextData[] = this.arrayData.array;

    addItem(text: string) {
        this.arrayData.addItem(text);
        this.text = '';
    }
}
