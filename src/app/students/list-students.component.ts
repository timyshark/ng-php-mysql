import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  studentsList : Student[] ;
  //currentStudent : Student;
  //dataFromChild : Student;

  
  //private currentStudentNdx =1;
  constructor(private _studentService : StudentService) { }

  ngOnInit() {
    this.studentsList = this._studentService.getStudentsList();
  //  this.currentStudent = this.studentsList[0];
  }

  /*
  nextStudent() : void{
    this.currentStudent = this.studentsList[this.currentStudentNdx];
    this.currentStudentNdx = (this.currentStudentNdx + 1) % 3;
  }
  */
 /*
 handleNotify(eventData:Student) {
  this.dataFromChild=eventData;
 }
 */
}
