import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
@Injectable({
   providedIn: 'root'
 })
 export class TestService {
     greet() {
         return "sasi";
     }
 }