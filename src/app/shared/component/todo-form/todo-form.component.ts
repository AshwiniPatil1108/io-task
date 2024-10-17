import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 @Output() todoEmiter : EventEmitter<Itodo>=new EventEmitter<Itodo>()
  constructor() { }

  ngOnInit(): void {
  }
  onTodoAdd(todoForm :NgForm){
    if(todoForm.valid){
      // console.log(todoForm.controls['todoRating'].value)
      // console.log(todoForm.value);

      let todoObj:Itodo ={...todoForm.value , todoRating: +todoForm.controls['todoRating'].value}
      console.log(todoObj)
      todoForm.reset()
      this.todoEmiter.emit(todoObj)
    }
  }
}
