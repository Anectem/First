import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from '@angular/platform-browser';
import {TableComponent} from "./table.component";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {TranslateModule} from "@ngx-translate/core";
import {ArrayDataService} from "../../services/array-data.service";


describe('TableComponent', () => {
        let component: TableComponent;
        let fixture: ComponentFixture<TableComponent>;
        let arrayService: ArrayDataService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TranslateModule.forRoot()],
                declarations: [TableComponent, TranslatePipe],
            }).compileComponents()
        }));
        beforeEach((() => {
            fixture = TestBed.createComponent(TableComponent);
            component = fixture.componentInstance;
            arrayService = new ArrayDataService();
        }));
        it('should display  value in table element ', () => {
            component.tableArray = [
                {
                    id: 1,
                    text: '123',
                    date: new Date()
                },
                {
                    id: 2,
                    text: '223',
                    date: new Date()

                }
                ,
                {
                    id: 3,
                    text: '323',
                    date: new Date()
                }

            ];
            fixture.detectChanges();
            let el1 = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(1)')).nativeElement;
            expect(el1.textContent).toContain('123');
            let el2 = fixture.debugElement.query(By.css('tr:nth-of-type(2) td:nth-of-type(1)')).nativeElement;
            expect(el2.textContent).toContain('223');
            let el3 = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(1)')).nativeElement;
            expect(el3.textContent).toContain('323')
        });
    }
);
