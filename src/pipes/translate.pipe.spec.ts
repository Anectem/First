import {TranslatePipe} from "./translate.pipe";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TableComponent} from "../app/table/table.component";
import {TranslateModule} from "@ngx-translate/core";
import {By} from "@angular/platform-browser";

describe('TranslatePipe', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot()],
            declarations: [TableComponent, TranslatePipe],
        }).compileComponents()
    }));
    beforeEach((() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
    }));

    it('TranslatePipe should transform no number value', () => {
        component.listArray = [
            {
                id: 1,
                text: 'Lalalala'
            }
        ];
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(2)')).nativeElement;
        expect(el.textContent).toContain('demo.noValue')

    });

    it('TranslatePipe should convert value with numbers and literals into value with only numbers', () => {
        component.listArray = [
            {
                id: 1,
                text: '1Lala3lala2'
            }
        ];
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(2)')).nativeElement;
        expect(el.textContent).toContain('132')

    })
});
