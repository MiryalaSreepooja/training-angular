import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { DeptService } from '../dept.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {
public dlist:Dept[];

constructor(private _deptService:DeptService,private route:Router) { 
   
}

ngOnInit() {
this._deptService.getDeptList().subscribe(data=>this.dlist=data);
}
onClick(dept:Dept)
{
  console.log(dept);
  //this.selectedEmp=emp;
  this.route.navigate(['/departments',dept.dno]);
  
}
dashboard()
  {
this.route.navigate(['/']);
  }
}
