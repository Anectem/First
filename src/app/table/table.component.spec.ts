import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from '@angular/platform-browser';
import {ListComponent} from "./table.component";
import {TranslatePipe} from "./translate.pipe";
import {TranslateModule} from "@ngx-translate/core";


describe('ListComponent', () => {
        let component: ListComponent;
        let fixture: ComponentFixture<ListComponent>;
        let el: HTMLElement;

        beforeEach((() => {
            TestBed.configureTestingModule({
                imports: [TranslateModule.forRoot()],
                declarations: [ListComponent, TranslatePipe],
            }).compileComponents()
        }));
        beforeEach((() => {
            fixture = TestBed.createComponent(ListComponent);
            component = fixture.componentInstance;
        }));
        it('should display value in table element ', () => {
            component.listArray = ['43565','43234','343','54334'];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('tr:nth-of-type(3) td:nth-of-type(2)')).nativeElement;
            expect(el.textContent).toContain('343')
        });
    it('should filter value in second row  element ', () => {
        component.listArray = ['43565','fsfsdf4dasd2dad1','343','54334'];
        fixture.detectChanges();
        let el = fixture.debugElement.query(By.css('tr:nth-of-type(2) td:nth-of-type(2)')).nativeElement;
        expect(el.textContent).toContain('421')
    });
        it('delete button should  delete element', () => {
            component.listArray = ['123'];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(el.textContent).not.toContain('123')
        });
    }
);
