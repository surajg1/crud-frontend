import { Component, OnInit } from '@angular/core';
import { StudentService } from '../common/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../common/student.model';
import { format } from 'url';
import {  FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  // providers: [StudentService]
})
export class StudentComponent implements OnInit {

  form: FormGroup;
  // form: NgForm;

  student: Student[];

  constructor(private studentService: StudentService) { }
  ngOnInit() {
    this.StudentList();
  }


  StudentList(){
    this.studentService.getStudent()
    .subscribe((res:Student[])=>{
      this.student = res;
      this.StudentList();
    });
  }

  onDelete(id:string){
    console.log("Im in delete!");
    this.studentService.deleteStudent(id).subscribe(
      (res)=>{
        alert("Deleted Sussfully!");
        this.StudentList();
      });
  }

  onEdit(id:string){
    console.log(id);
    this.studentService.getOneStudent(id)
    .subscribe(student => {
      console.log(student);
      // this.form.setValue({
      //   name : student.name,
      //   s_class : student.s_class,
      //   email: student.email
      // });
  }

)}

}