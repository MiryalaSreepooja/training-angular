import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
   selector: 'app-test',
   template: `<h1>hello</h1>
              <h2>{{message}}</h2>`,
   styleUrls: []
})
export class TestComponent implements OnInit {
   title = 'app-testing';
   public message = "sasi";
   public msg:string;
   constructor(private _testservice:TestService) { }
   ngOnInit() {
       this.msg=this._testservice.greet();
   }
}