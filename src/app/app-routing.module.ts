import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesOfTheMonthComponent } from './employees-of-the-month/employees-of-the-month.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditorComponent } from './editor/editor.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employeesOfTheMonth', component: EmployeesOfTheMonthComponent },
  { path: 'Editor', component: EditorComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'story', component: StoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
