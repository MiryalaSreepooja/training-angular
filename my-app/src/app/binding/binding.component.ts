import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <h2 [class]='style'>This is a text</h2>
    <button (click)='onClick()'>change</button>
    <hr>
    <input type='text' [disabled]='status' #mymsg [(ngModel)]='msg'>
    <h1>{{msg}}</h1>
    <button (click)='enable()'>enable</button>
    <button (click)='logmsg(mymsg)'>Log msg</button>
    <button (click)='loggreet($event)'>know what event?</button>

  `,
  styles: [
    `.error{
      color:red
    }
    .normal{
      color:green
    }`
  ]
})
export class BindingComponent implements OnInit {
public style:string ='normal';
  constructor() { }
public status:boolean=true;
public msg:string='default';
  ngOnInit() {
  }
  onClick(){
    if(this.style=='error')
    {
    this.style='normal'
    }
    else(this.style=='normal')
    {
    this.style='error'
    }
  }
enable(){
  this.status=false
}
logmsg(msg){
  console.log(msg.value);
}
loggreet(event){
console.log(event);
}
}
