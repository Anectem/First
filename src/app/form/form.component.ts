import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ArrayDataService} from "../../services/array-data.service";
import {Ilang, LangService} from "../../services/lang.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers:[LangService]
})

export class FormComponent {
    constructor(private translate: TranslateService,
                private arrayData: ArrayDataService,
                private lang: LangService){
    }
    public text: string;
    public Language :Ilang[]= this.lang.Language;

    addItem(text: string) {
        this.arrayData.addItem(text);
        this.text = '';
    }
    changeLanguage (elem:Ilang){
        this.lang.changeLanguage(elem);
    }
    trackById(index: number, elem: any) {
        return index;
    }
}
