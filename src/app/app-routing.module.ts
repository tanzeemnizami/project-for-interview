import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';



const routes: Routes = [
 {path: 'home/detail/:id', component: EmployeedetailComponent},
 {path: 'home', component: AppComponent},
 {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
