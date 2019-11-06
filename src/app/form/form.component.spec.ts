import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA,} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {FormComponent} from "./form.component";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {ArrayDataService} from "../../services/array-data.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpLoaderFactory} from "../app.module";
import {HttpClient} from "@angular/common/http";

const TRANSLATIONS_EN = require('../../assets/i18n/en.json');
const TRANSLATIONS_RU = require('../../assets/i18n/ru.json');


describe('FormComponent', () => {
        let component: FormComponent;
        let fixture: ComponentFixture<FormComponent>;
        let service: ArrayDataService;
        let translate: TranslateService;
        let http: HttpTestingController;

        beforeEach((() => {
            TestBed.configureTestingModule({
                imports: [FormsModule, HttpClientTestingModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: HttpLoaderFactory,
                            deps: [HttpClient]
                        }
                    })],
                declarations: [FormComponent],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [ArrayDataService, TranslateService]
            }).compileComponents();
            fixture = TestBed.createComponent(FormComponent);
            component = fixture.componentInstance;
            translate = TestBed.get(TranslateService);
            http = TestBed.get(HttpTestingController);
        }));

        it('button should call addItem ', () => {
            spyOn(component, 'addItem');
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(component.addItem).toHaveBeenCalled();
        });

        xit('should load translations', (() => {
            spyOn(translate, 'getBrowserLang').and.returnValue('en');
            // the DOM should be empty for now since the translations haven't been rendered yet
            fixture.detectChanges();
            // the content should be translated to english now
            expect((fixture.debugElement.query(By.css('button')).nativeElement.textContent).toEqual(TRANSLATIONS_EN.addButton));
            translate.use('ru');
            fixture.detectChanges();
            // the content should be translated to russian now
            expect(fixture.debugElement.query(By.css('button')).nativeElement.textContent).toEqual(TRANSLATIONS_RU.addButton);

        }));

        xit('button should call addItem and add value to array ', () => {
            component.text = 'TestingUtility';
            let el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(service.array[0].id).toBe(4);
        });
    }
);

