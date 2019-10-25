import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from '@angular/platform-browser';
import {TableComponent} from "./table.component";
import {TranslatePipe} from "./translate.pipe";
import {TranslateModule} from "@ngx-translate/core";


describe('TableComponent', () => {
        let component: TableComponent;
        let fixture: ComponentFixture<TableComponent>;

        beforeEach(async(() =>  {
            TestBed.configureTestingModule({
                imports: [TranslateModule.forRoot()],
                declarations: [TableComponent, TranslatePipe],
            }).compileComponents()
        }));
        beforeEach((() => {
            fixture = TestBed.createComponent(TableComponent);
            component = fixture.componentInstance;
        }));
        it('should display and value in table element ', () => {
            component.listArray = [
                {
                    id: 1,
                    text: '123'
                },
                {
                    id: 2,
                    text: '223'
                }
                ,
                {
                    id: 3,
                    text: '323'
                }

            ];
            fixture.detectChanges();
            let el1 = fixture.debugElement.query(By.css('tr:nth-of-type(1) td:nth-of-type(1)')).nativeElement;
            expect(el1.textContent).toContain('123')
            let el2 = fixture.debugElement.query(By.css('tr:nth-of-type(2) td:nth-of-type(1)')).nativeElement;
            expect(el2.textContent).toContain('223')
            let el3 = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(1)')).nativeElement;
            expect(el3.textContent).toContain('323')
        });

        it('delete button should call delete method', () => {
            spyOn(component, 'deleteItem');
            component.listArray = [
                {
                    id: 1,
                    text: '123'
                },
            ];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.deleteItem).toHaveBeenCalled();
        });
        it('delete method should delete item', () => {
            component.listArray = [
                {
                    id: 1,
                    text: '123'
                },
            ];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.listArray.length).toBe(0);
        });
    }
);
