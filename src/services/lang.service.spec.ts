import {LangService} from "./lang.service";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TestBed} from "@angular/core/testing";


describe('LangService', () => {
    let service: LangService;
    let valueServiceSpy: jasmine.SpyObj<TranslateService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('TranslateService', ['use']);

        TestBed.configureTestingModule({ providers: [LangService,{ provide: TranslateService, useValue: spy } ],imports:[TranslateModule.forRoot()] });
    });

    it('lang method should change language', () => {
        service = TestBed.get(LangService);
        valueServiceSpy = TestBed.get(TranslateService);
        service.useLanguage('ru');
        expect(valueServiceSpy.use).toHaveBeenCalledWith('ru');
    })
});



