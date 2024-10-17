import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';

import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentTableComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
