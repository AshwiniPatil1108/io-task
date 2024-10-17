import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  stdArr: Array<Istd>=[
    {
      fname: "Jhon",
      lname: "Doe",
      email:"jhon@gmail.com",
      contact:4567893456,
      isActive: "in-active"
    },
    {
      fname: "Jen",
      lname: "Doe",
      email:"jen@gmail.com",
      contact:8945673456,
      isActive: "active"
    },
    {
      fname: "May",
      lname: "Doe",
      email:"may@gmail.com",
      contact:3456456789,
      isActive: "active"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getStd(std : Istd){
    this.stdArr.push(std)
  }

}
