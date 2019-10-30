import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ArrayDataService} from "../../services/array-data.service";


@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TableComponent),
            multi: true,
        },
    ]
})
export class TableComponent {
    public tableArray: object[] = [];

    constructor(private translate: TranslateService,
                private cdr: ChangeDetectorRef,
                private arrayData: ArrayDataService) {
    }


    writeValue(value: any): void {
        this.tableArray = value;
        this.cdr.detectChanges()
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    trackById(index: number, elem: any) {
        return elem.id;
    }
}



