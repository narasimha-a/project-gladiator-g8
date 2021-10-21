import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FilterStudentsComponent } from './filter-students/filter-students.component';
import { ModifyExamChildComponent } from './modify-exam-child/modify-exam-child.component';
import { ModifyExamComponent } from './modify-exam/modify-exam.component';

const routes: Routes = [
  {path:'admin',component:AdminLoginComponent},
  {path:'admin/exams/getExamData',component:ModifyExamComponent},
  {path:'admin/exams/addExamData',component:AddExamComponent},
  {path:'admin/exams/updateExam',component:ModifyExamChildComponent},
  {path:"admin/searchStudents",component:FilterStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
