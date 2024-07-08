import { Component, OnInit } from '@angular/core';
import { Itodos } from '../model/todo.interface';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr !: Array<Itodos>

  constructor(
    private _todo : TodoService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todo.fetchTodoItems()
  }

  onTodoRemove(removeTodo : Itodos){
      this._todo.removeTodoItem(removeTodo)
  }
}
