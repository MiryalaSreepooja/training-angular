import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmpService } from './emp.service';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';
import { AddempComponent } from './addemp/addemp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpdetailsComponent,
    DeptlistComponent,
    PagenotfoundComponent,
    DashboardComponent,
    DeptdetailsComponent,
    AddempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
