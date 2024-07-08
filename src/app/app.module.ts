import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdFormComponent } from './shared/component/stdTask/std-form/std-form.component';
import { StdTableComponent } from './shared/component/stdTask/std-table/std-table.component';
import { TodoFormComponent } from './shared/component/TodoTask/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/TodoTask/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material/material.module';
import { StdModule } from './shared/component/stdTask/std/std.module';
import { TodoModule } from './shared/component/TodoTask/todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StdModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
