import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA,} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {FormComponent} from "./form.component";
import {TranslateModule} from "@ngx-translate/core";


describe('FormComponent', () => {
        let component: FormComponent;
        let fixture: ComponentFixture<FormComponent>;
        beforeEach((() => {
            TestBed.configureTestingModule({
                imports: [FormsModule, TranslateModule.forRoot()],
                declarations: [FormComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents()
        }));
        beforeEach((() => {
            fixture = TestBed.createComponent(FormComponent);
            component = fixture.componentInstance;
        }));

        it('method should add to Array value ', () => {
            component.text = 'ddswe3sda2accx1';
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.dataArray).toContain("ddswe3sda2accx1");
        });

        it('should not  add empty string to Array', () => {
            component.text = '';
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.dataArray).not.toContain('');
        });

        it('button should call changeHandler ', () => {
            spyOn(component, 'changeHandler');
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.changeHandler).toHaveBeenCalled();
        });

    }
);
