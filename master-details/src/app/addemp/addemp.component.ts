import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
public emp:Emp;
public acctype:string;
public aclist=['savings','current'];
  constructor(private _service:EmpService) { }

  ngOnInit() {
    this.emp=new Emp(null,null,null,null);
  }
onSubmit(){
  console.log(this.emp);
  this._service.saveEmp(this.emp).subscribe(data=>console.log(data));
  
}
}
