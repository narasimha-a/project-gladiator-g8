import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExamReportComponent } from './exam-report/exam-report.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { StartendexamComponent } from './startendexam/startendexam.component';
import {ExamEditorComponent} from "./exam-editor/exam-editor.component";

const routes: Routes = [
  {path: "adminHome", component: AdminHomeComponent},
  {path:"startExam/exam", component:StartendexamComponent},
  {path:"startExam",component:StartExamComponent} ,
  {path:"startExam/exam/report", component:ExamReportComponent},
  {path: "admin/home", component: AdminHomeComponent},
  {path: "admin/examEditor", component: ExamEditorComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AdminHomeComponent,StartendexamComponent,StartExamComponent,ExamReportComponent];

