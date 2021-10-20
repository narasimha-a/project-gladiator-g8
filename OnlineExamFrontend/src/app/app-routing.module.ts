import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ModifyExamChildComponent } from './modify-exam-child/modify-exam-child.component';
import { ModifyExamComponent } from './modify-exam/modify-exam.component';

const routes: Routes = [
  {path:'admin/exams/getExamData',component:ModifyExamComponent},
  {path:'admin/exams/addExamData',component:AddExamComponent},
  {path:'admin/exams/updateExam',component:ModifyExamChildComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
