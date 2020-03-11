import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Student } from 'src/app/common/student.model';
import { StudentService } from 'src/app/common/student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sudent-form',
  templateUrl: './sudent-form.component.html',
  styleUrls: ['./sudent-form.component.css']
})
export class SudentFormComponent implements OnInit {

  form: FormGroup;
  // form: NgForm;
  private mode = "create";
  student: Student;

  StdId : String;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl(null, {
        validators : [ Validators.required, Validators.minLength(3)]
      }),
      email : new FormControl(null, { 
        validators : [Validators.required]
      }),
       sclass : new FormControl(null, { 
        validators : [Validators.required]
      })
    });

    this.StdId = this.route.snapshot.params['studentId'];
    if(this.StdId != null){
      this.mode = 'update';
      this.studentService.getOneStudent(this.StdId)
        .subscribe((res : Student) =>{
          this.student = {
            _id : res._id,
            name : res.name,
            email : res.email,
            sclass : res.sclass
          };

          this.form.setValue({
            name : this.student.name,
            sclass : this.student.sclass,
            email : this.student.email
          })
        })
    }
    
    
  }

  onSubmit(){
    if(this.mode == "create"){
      this.studentService.postStudent(this.form.value).subscribe(res =>{
      this.form.reset();
      this.router.navigate(['/']);
    }) 
  }
      else{
        this.studentService.updateStudent( this.StdId ,this.form.value.name, this.form.value.sclass, this.form.value.email).subscribe(res => {
          this.form.reset();
          this.router.navigate(['/']);
        })
      }  
  }

}
