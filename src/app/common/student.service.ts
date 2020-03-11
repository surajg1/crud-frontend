import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent : Student;
  students : Student[];
  readonly baseURL = "http://localhost:3000/student";

  constructor(private http : HttpClient) { }

  postStudent(std : Student){
    return this.http.post(this.baseURL, std);
  }
  
  getStudent(){
    return this.http.get(this.baseURL);
  }
  
  deleteStudent(std_id){
    return this.http.delete(this.baseURL + `/${std_id}`);

  }
  
  getOneStudent(std_id){
    return this.http.get(this.baseURL + `/${std_id}`);
    
  }

  updateStudent(id, name, sclass, email ){


    return this.http.put(this.baseURL + `/${id}`, {
      "name" : name,
      "sclass" : sclass,
      "email" : email
     });
    // return this.http.get(this.baseURL);

  }
}
