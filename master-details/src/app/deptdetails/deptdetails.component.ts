import { Component, OnInit } from '@angular/core';
import { Dept } from '../dept';
import { ActivatedRoute, Router } from '@angular/router';
import { DeptService } from '../dept.service';

@Component({
  selector: 'app-deptdetails',
  templateUrl: './deptdetails.component.html',
  styleUrls: ['./deptdetails.component.css']
})
export class DeptdetailsComponent implements OnInit {

  
  public dept:Dept;

  constructor(private route:ActivatedRoute,private _deptService:DeptService,private router:Router) { }

  ngOnInit() {
    let dno=parseInt(this.route.snapshot.paramMap.get('dno'));
    this._deptService.findDept(dno).subscribe(data=>this.dept=data);
    console.log(dno);
  }
  goback()
  {
this.router.navigate(['/departments']);
  }

}
