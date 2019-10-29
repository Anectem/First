import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";


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
    public listArray: object[] = [];

    constructor(private translate: TranslateService,
                private cdr: ChangeDetectorRef) {

    }

    writeValue(value: any): void {
        this.listArray = value;
        this.cdr.detectChanges()
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    // ngOnInit() {
    //     console.log(`onInit`);
    // }
    //
    //
    // ngOnDestroy() {
    //     console.log(`onDestroy`);
    // }
    //
    // ngDoCheck() {
    //     console.log(`ngDoCheck`);
    //     console.log(this.listArray);
    // }
    //
    // ngAfterViewInit() {
    //
    //     console.log(`ngAfterViewInit`);
    // }
    //
    // ngAfterViewChecked() {
    //
    //     console.log(`ngAfterViewChecked`);
    // }
    //
    // ngAfterContentInit() {
    //
    //     console.log(`ngAfterContentInit`);
    // }
    //
    // ngAfterContentChecked() {
    //
    //     console.log(`ngAfterContentChecked`);
    // }

    trackById(index: number, elem: any) {
        return elem.id;
    }

    deleteItem(index: number) {
        this.listArray.splice(index, 1);
    }

}



