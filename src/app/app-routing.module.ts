import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesOfTheMonthComponent } from './employees-of-the-month/employees-of-the-month.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditorComponent } from './editor/editor.component';
import { StoryComponent } from './story/story.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employeesOfTheMonth', component: EmployeesOfTheMonthComponent },
  { path: 'Editor', component: EditorComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'story', component: StoryComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
