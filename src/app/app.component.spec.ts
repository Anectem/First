import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

import {AppComponent} from "./app.component";

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [TranslateModule.forRoot()],
                declarations: [AppComponent],
                schemas: [NO_ERRORS_SCHEMA]
            },
        ).compileComponents()
    }));
    beforeEach((() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    }));
    it('should create component', () => {
        expect(component).toBeDefined();
    })
});
