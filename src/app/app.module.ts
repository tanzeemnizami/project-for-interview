import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSelectModule} from '@angular/material/select';






@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectAllModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    BrowserAnimationsModule 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
