// import {async, ComponentFixture, TestBed} from "@angular/core/testing";
// import {NO_ERRORS_SCHEMA,} from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {By} from '@angular/platform-browser';
// import {FormComponent} from "./form.component";
// import {TranslateModule} from "@ngx-translate/core";
// import {ArrayDataService} from "../../services/array-data.service";
//
// describe('FormComponent', () => {
//         let component: FormComponent;
//         let fixture: ComponentFixture<FormComponent>;
//         beforeEach(async(() => {
//             TestBed.configureTestingModule({
//                 imports: [FormsModule, TranslateModule.forRoot()],
//                 declarations: [FormComponent],
//                 schemas: [NO_ERRORS_SCHEMA],
//                 providers: [ArrayDataService]
//             }).compileComponents()
//         }));
//         beforeEach((() => {
//             fixture = TestBed.createComponent(FormComponent);
//             component = fixture.componentInstance;
//         }));
//
//         it('button should call addItem ', () => {
//             spyOn(component, 'addItem');
//             let el = fixture.debugElement.query(By.css('button')).nativeElement;
//             el.click();
//             expect(component.addItem).toHaveBeenCalled();
//         });
//
//     }
// );
