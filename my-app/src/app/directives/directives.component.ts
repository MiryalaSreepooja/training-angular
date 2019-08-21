import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <div class='container'>
    <ul *ngFor='let color of colors' class='list-group'>
    <li class='list-group-item'>{{color}}</li>
    </ul>
    </div>
    <h2 *ngIf='display; else named'>pooja</h2>
    <ng-template #named>
    <h2>name hidden</h2>
    </ng-template>
    <hr>
    <div class='container'>
    <h2>Angular pipes</h2>
    <h2>{{message}}</h2>
    <h2>{{message|uppercase}}</h2>
    <h2>{{message|lowercase}}</h2>
    <h2>{{message|titlecase}}</h2>
    <h2>{{.34|percent}}</h2>
    <pre>{{object|json}}</pre>
    </div>


  `,
  styles: []
})
export class DirectivesComponent implements OnInit {
public colors:string[]=['red','green','purple','orange','blue'];
public message:string='assignment';
object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }
public display:boolean=true;
  ngOnInit() {
  }

}
