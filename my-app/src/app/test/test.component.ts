import { Component } from '@angular/core';

@Component({
    selector:'my-com',
    templateUrl:'./test.component.html',
    styles:[`h1{color:blue}`]
})

export class TestComponent{
    message="MY FIRST COMPONENT";
    constructor(){}
    color='red';
    public emp={id:100,name:'pooja',city:'hyderabad',salary:3232};
}