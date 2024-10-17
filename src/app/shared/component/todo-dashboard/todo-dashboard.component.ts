import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArr : Array<Itodo>=[
    {
      todoItem : "javascript",
      todoRating: 4
    },
    {
      todoItem : "Flex",
      todoRating: 3
    },
    {
      todoItem : "SASS",
      todoRating: 2
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getTodo(todo :Itodo){
     this.todoArr.push(todo)
  }
}
