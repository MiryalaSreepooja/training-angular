import { TestBed } from "@angular/core/testing";
import { TestComponent } from './test.component';
import { TestService } from '../test.service';
describe("Testing TestComponent",()=>{
 beforeEach(()=>{
     TestBed.configureTestingModule({
         declarations:[TestComponent]
     });
 });
 let comp:TestComponent;
 it("should create a Test component",()=>{
     comp=TestBed.createComponent(TestComponent).componentInstance;
     expect(comp).toBeTruthy();
 });
 it("test value of h1 tag",()=>{
     const fixture=TestBed.createComponent(TestComponent);
     fixture.detectChanges();
     const compiled=fixture.debugElement.nativeElement;
     expect(compiled.querySelector('h1').textContent).toEqual('hello');
 });
 it("test value of h2 tag",()=>{
     const fixture=TestBed.createComponent(TestComponent);
     fixture.detectChanges();
     const compiled=fixture.debugElement.nativeElement;
     expect(compiled.querySelector('h2').textContent).toEqual('sasi');
 });
//   it("test value of h2 tag",()=>{
//       const fixture=TestBed.createComponent(TestComponent);
//       fixture.detectChanges();
//       const compiled=fixture.debugElement.nativeElement;
//       expect(compiled.querySelector('h2').textContent).toEqual(comp.message);
//   });
it("test value of h2 tag",()=>{
   const fixture=TestBed.createComponent(TestComponent);
   fixture.detectChanges();
   const compiled=fixture.debugElement.nativeElement;
   const service : TestService=TestBed.get(TestService);
   expect(compiled.querySelector('h2').textContent).toEqual(service.greet());
});
});