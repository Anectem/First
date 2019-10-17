import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ListComponent} from "./list.component";
import {TranslatePipe} from "./options.pipe";
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
        it('should display value in list element ', () => {
            component.listArray = ['43565','43234','343','54334'];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('li:nth-of-type(3)')).nativeElement;
            expect(el.textContent).toContain('343')
        });
        it('delete button should call delete element', () => {
            component.listArray = ['123'];
            fixture.detectChanges();
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(el.textContent).not.toContain('123')
        });
    }
);
