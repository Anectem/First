import {TranslatePipe} from "./translate.pipe";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TableComponent} from "../app/table/table.component";
import {TranslateModule} from "@ngx-translate/core";
import {By} from "@angular/platform-browser";
import {ArrayDataService} from "../services/array-data.service";

describe('TranslatePipe', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot()],
            declarations: [TableComponent, TranslatePipe],
            providers: [ArrayDataService]
        }).compileComponents();
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
    }));

    it('TranslatePipe should transform no number value', () => {
        component.tableArray = [
            {
                id: 1,
                text: 'Lalalala',
                date: new Date()
            },
            {
                id: 2,
                text: '!@%$E^T&()_O+|?+',
                date: new Date()
            }, {
                id: 3,
                text: '))(_&@!#^&$ ^!@##@(*@@@#)',
                date: new Date()
            }, {
                id: 4,
                text: '____________________}!~',
                date: new Date()
            }
        ];
        fixture.detectChanges();

        let el1 = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(2)')).nativeElement;
        let el2 = fixture.debugElement.query(By.css('tr:nth-of-type(2) td:nth-of-type(2)')).nativeElement;
        let el3 = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(2)')).nativeElement;
        let el4 = fixture.debugElement.query(By.css('tr:nth-of-type(4) td:nth-of-type(2)')).nativeElement;

        expect(el1.innerText).toBe('noValue');
        expect(el2.innerText).toBe('noValue');
        expect(el3.innerText).toBe('noValue');
        expect(el4.innerText).toBe('noValue');
    });

    it('TranslatePipe should convert value with numbers and literals into value with only numbers', () => {
        component.tableArray = [
            {
                id: 1,
                text: '1Lala3lala2',
                date: new Date()
            }, {
                id: 1,
                text: 'Testing!@#12SDA3dasfds6',
                date: new Date()
            }, {
                id: 1,
                text: '___!!_!__!_!@-1-__@-2_____-3',
                date: new Date()
            }, {
                id: 1,
                text: '?|!+_#@!_$**%+)!_)&#%/*-++11++--*@++1',
                date: new Date()
            }
        ];
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(2)')).nativeElement;
        let e2 = fixture.debugElement.query(By.css('tr:nth-of-type(2) td:nth-of-type(2)')).nativeElement;
        let e3 = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(2)')).nativeElement;
        let e4 = fixture.debugElement.query(By.css('tr:nth-of-type(4) td:nth-of-type(2)')).nativeElement;
        expect(el.textContent).toContain('132');
        expect(e2.textContent).toContain('1236');
        expect(e3.textContent).toContain('123');
        expect(e4.textContent).toContain('111');
    })
});
