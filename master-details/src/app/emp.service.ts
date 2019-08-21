import { Injectable } from '@angular/core';
import { EMPLIST } from './emp-mock';
import { Observable, of } from 'rxjs';
import { Emp } from './emp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
private _url="http://localhost:8181/app/emp/";
private _urllist="http://localhost:8181/app/emp/list";
private _findurl="http://localhost:8181/app/emp/find/";
  constructor(private _http:HttpClient) { }
 getEmpList():Observable<Emp[]>{
   return this._http.get<Emp[]>(this._urllist);
  
 }
//  getEmpList():Observable<Emp[]>{
//   return of(EMPLIST);
// }
 findEmp(id:number):Observable<Emp>{
   return this._http.get<Emp>(this._findurl+id);
 }
 saveEmp(emp:Emp)
 {
   return this._http.post<any>(this._url+'save',emp);
 }
}
