import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoList: Todo[] = [];
  @ViewChild('todoText') todoText!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {

    this.todoList.push({ todoId: this.todoList.length + 1, text: todoText, isCompleted: false });
    if (this.todoText) {
      // Reset the input value
      this.todoText.nativeElement.value = ''; 
    }
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.todoList = [];
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {

    const existTodo = this.todoList.find(t => t.todoId === todo.todoId);
    if (existTodo) {
      todo.isCompleted = !todo.isCompleted;
    }

  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId: any) {
    this.todoList = this.todoList.filter(todo => todo.todoId !== todoId);
  }

}
