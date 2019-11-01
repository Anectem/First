import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ArrayDataService, ITextData} from "../../services/array-data.service";


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
        }
    ]
})
export class TableComponent {
    public tableArray: ITextData[] = [];

    constructor(private translate: TranslateService,
                private cdr: ChangeDetectorRef,
                private arrayData: ArrayDataService
    ) {
    };

    ngDoCheck() {
        this.cdr.detectChanges()
    }
    writeValue(value: any): void {
        this.tableArray = value;
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    trackById(index: number, elem: any) {
        return elem.id;
    }
    deleteItem (index:number){
        this.arrayData.deleteItem(index);
    }

}


