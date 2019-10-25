import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

type Text = {
    id: number;
    text: string;
};

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormComponent {
    constructor(private translate: TranslateService) {
    }

    public id: number = 0;
    public text: string = '';
    public dataArray: Text[] = [];

    changeHandler() {
        if (this.text !== '') {
            this.dataArray = this.dataArray.concat([{
                id: this.id++,
                text: this.text
            }]);
        }
        this.text = '';

    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

}
