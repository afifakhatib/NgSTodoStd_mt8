import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/service/todo.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm !: NgForm

  constructor(
    private _todo : TodoService,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if(this.todoForm.valid){
      let newTodo = {...this.todoForm.value , todoId : this._uuid.uuid()}
      this.todoForm.resetForm()
      this._todo.createTodoItem(newTodo)
    }
  }
}
