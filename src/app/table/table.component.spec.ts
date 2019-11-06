import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from '@angular/platform-browser';
import {TableComponent} from "./table.component";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {TranslateModule} from "@ngx-translate/core";
import {ArrayDataService} from "../../services/array-data.service";


describe('TableComponent', () => {
        let component: TableComponent;
        let fixture: ComponentFixture<TableComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TranslateModule.forRoot()],
                declarations: [TableComponent, TranslatePipe],
                providers: [ArrayDataService]
            }).compileComponents();
            fixture = TestBed.createComponent(TableComponent);
            component = fixture.componentInstance;
        });
        it('should display filtered value in second row table', () => {
            component.tableArray = [
                {
                    id: 1,
                    text: 'I1tryingtoTest2Filter3Work5',
                    date: new Date()
                },
                {
                    id: 2,
                    text: 'TestFilterWork',
                    date: new Date()
                }
                ,
                {
                    id: 3,
                    text: 'One2TwoFr331',
                    date: new Date()
                }
                ,
                {
                    id: 4,
                    text: '/><+_)(*&&^^%%$$1##@3#$%^&*5(',
                    date: new Date()
                },
                {
                    id: 5,
                    text: '!@#$%^&*()_+?><:"||~~~~/*-+<<<<<>>>',
                    date: new Date()
                }
            ];
            fixture.detectChanges();
            let el1 = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(2)')).nativeElement;
            expect(el1.innerText).toBe('1235');
            let el2 = fixture.debugElement.query(By.css('tr:nth-of-type(2) td:nth-of-type(2)')).nativeElement;
            expect(el2.innerText).toBe('noValue');
            let el3 = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(2)')).nativeElement;
            expect(el3.innerText).toBe('2331');
            let el4 = fixture.debugElement.query(By.css('tr:nth-of-type(4) td:nth-of-type(2)')).nativeElement;
            expect(el4.innerText).toBe('135');
            let el5 = fixture.debugElement.query(By.css('tr:nth-of-type(5) td:nth-of-type(2)')).nativeElement;
            expect(el5.innerText).toBe('noValue')
        });
        it('delete button should call delete method', () => {
            spyOn(component, 'deleteItem');
            component.tableArray = [
                {
                    id: 1,
                    text: 'I1tryingtoTest2Filter3Work5',
                    date: new Date()
                }
            ];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.deleteItem).toHaveBeenCalledWith(0)
        });
    }
);
