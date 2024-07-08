import { Injectable } from '@angular/core';
import { Itodos } from '../component/TodoTask/model/todo.interface';
import { UuidService } from './uuid.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoData : Array<Itodos> = [
    {
      todoitem : 'javaScript',
      todoId : this._uuid.uuid()
    },
    {
      todoitem : 'Angular',
      todoId : this._uuid.uuid()
    },
    {
      todoitem : 'Mongo DB',
      todoId : this._uuid.uuid()
    }
  ]

  constructor(
    private _uuid : UuidService,
    private _snackBar : SnackBarService
  ) { }

  fetchTodoItems(){
    // api call
    return this.todoData
  }

  createTodoItem(newTodo : Itodos){
    // api call
    this.todoData.push(newTodo)
    this._snackBar.openSnackBar(`New TodoItem ${newTodo.todoitem} added to list successfully!!`)
  }

  removeTodoItem(removeTodo : Itodos){
    let Confermation = confirm(`Are you sure ? Do you want to remove ${removeTodo.todoitem} item from list ?`)
    if(Confermation === true){
        let getindex = this.todoData.findIndex(remove => remove.todoId === removeTodo.todoId)
        this.todoData.splice(getindex , 1)        
        this._snackBar.openSnackBar(`TodoItem ${removeTodo.todoitem} removed from list successfully!!`)
    }
  }
}
