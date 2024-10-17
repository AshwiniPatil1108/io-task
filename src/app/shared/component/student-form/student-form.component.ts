import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
@Output() stdEmitter : EventEmitter<Istd>= new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(stdForm :NgForm){
    
    if(stdForm.valid){
      console.log(stdForm.value);
      
      this.stdEmitter.emit(stdForm.value)
      stdForm.reset()
    }
  }
}
