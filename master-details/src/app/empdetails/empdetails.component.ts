import { Component, OnInit ,Input } from '@angular/core';
import { Emp } from '../emp';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
 // @Input() emp:Emp;
public emp:Emp;

  constructor(private route:ActivatedRoute,private _empService:EmpService,private router:Router) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this._empService.findEmp(id).subscribe(data=>this.emp=data);
    console.log(id);
  }
  goback()
  {
this.router.navigate(['/employees']);
  }
 // getEmp(id:number):Observable<Emp>{

    
  //}
}
