import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dept } from './dept';
import {DEPTLIST} from './dept-mock';
@Injectable({
    providedIn: 'root'
  })
  export class DeptService{
    getDeptList():Observable<Dept[]>{
        return of(DEPTLIST);
      }
       findDept(dno:number):Observable<Dept>{
         return of(DEPTLIST.find(dept=>dept.dno===dno));
       }
  }