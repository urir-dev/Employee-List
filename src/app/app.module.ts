import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { MessagesComponent } from './messages/messages.component';
import { EmployeesOfTheMonthComponent } from './employees-of-the-month/employees-of-the-month.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditorComponent } from './editor/editor.component';
import { StoryComponent } from './story/story.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { GreetinglineComponent } from './greetingline/greetingline.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    MessagesComponent,
    EmployeesOfTheMonthComponent,
    EmployeeDetailsComponent,
    EditorComponent,
    StoryComponent,
    LoginscreenComponent,
    GreetinglineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
