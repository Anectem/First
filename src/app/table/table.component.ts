import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
    selector: 'app-list',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListComponent),
            multi: true,
        }
    ]

})
export class ListComponent implements ControlValueAccessor {
    listArray: string[] = [];

    writeValue(value: any): void {
        this.listArray = value;
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    deleteItem(index: number) {
        this.listArray.splice(index, 1);
    }

}


