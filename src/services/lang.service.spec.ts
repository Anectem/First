// import {LangService} from "./lang.service";
// import {TranslateModule, TranslateService} from "@ngx-translate/core";
// import {TestBed} from "@angular/core/testing";
//
//
// describe('LangService', () => {
//     let service: LangService;
//     let translate: TranslateService;
//     beforeEach(() => {
//         const spy = jasmine.createSpyObj('TranslateService', ['use', 'setDefaultLang']);
//         TestBed.configureTestingModule({
//             providers: [LangService, {provide: TranslateService, useValue: spy}],
//             imports: [TranslateModule.forRoot()]
//         });
//     });
//
//     it('lang method should change language', () => {
//         service = TestBed.get(LangService);
//         translate = TestBed.get(TranslateService);
//         service.changeLanguage({lang: 'ru', active: false});
//         expect(translate.use).toHaveBeenCalledWith('ru');
//     })
// });
//


