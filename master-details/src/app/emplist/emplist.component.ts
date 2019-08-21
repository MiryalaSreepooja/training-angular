import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  public selectedEmp:Emp;
  public emplist:Emp[];
  constructor(private _empService:EmpService,private route:Router) { 
   
  }

  ngOnInit() {
  this._empService.getEmpList().subscribe(data=>this.emplist=data);
  }
  onClick(emp:Emp)
  {
    console.log(emp);
    //this.selectedEmp=emp;
    this.route.navigate(['/employees',emp.id]);
    
  }
  dashboard()
  {
this.route.navigate(['/']);
  }
}
