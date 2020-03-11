import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudentFormComponent } from './student/sudent-form/sudent-form.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'studentForm', component: SudentFormComponent},
  {path:'', component: StudentComponent },
  {path : 'update/:studentId', component: SudentFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
