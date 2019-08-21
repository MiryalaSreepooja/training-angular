import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';
import { AddempComponent } from './addemp/addemp.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'employees',component:EmplistComponent},
  {path: 'departments',component:DeptlistComponent},
  {path: 'addemp',component:AddempComponent},
  {path: 'employees/:id',component:EmpdetailsComponent},
  {path: 'departments/:dno',component:DeptdetailsComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
