import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
 @Input() studentData !:Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
