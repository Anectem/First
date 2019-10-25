import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from '@angular/platform-browser';
import {TableComponent} from "./table.component";
import {TranslatePipe} from "./translate.pipe";
import {TranslateModule} from "@ngx-translate/core";


describe('ListComponent', () => {
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
        it('should display and filter value in table element ', () => {
            component.listArray = [
                {
                    id: 1,
                    text: '1test2t3'
                },
                {
                    id: 2,
                    text: '2test2t3'
                }
                ,
                {
                    id: 3,
                    text: '3test2t3'
                }

            ];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(2)')).nativeElement;
            expect(el.textContent).toContain('323')
        });

        it('delete button should call delete method', () => {
            spyOn(component, 'deleteItem');
            component.listArray = [
                {
                    id: 1,
                    text: '1test2t3'
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
                    text: '1test2t3'
                },
            ];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.listArray.length).toBe(0);
        });
    }
);
