import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyExamComponent } from './modify-exam/modify-exam.component';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExamReportComponent } from './exam-report/exam-report.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { StartendexamComponent } from './startendexam/startendexam.component';
import {ExamEditorComponent} from "./exam-editor/exam-editor.component";
import { AddUserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChooseExamComponent } from './choose-exam/choose-exam.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {ViewReportsComponent} from "./view-reports/view-reports.component";
import {UserHomeComponent} from "./user-home/user-home.component";
import {UserExamComponent} from "./user-exam/user-exam.component";

const routes: Routes = [
  {path:"admin/login",component:AdminLoginComponent},
  {path:"admin/user-home", component: AdminHomeComponent},
  {path:'admin/exams',component:ModifyExamComponent},
  {path:"admin/exams/:examId", component: ExamEditorComponent},
  {path:"admin/viewReports", component: ViewReportsComponent},

  {path:"user/exams/exam",component:UserExamComponent},

  // {path:"startExam/exam", component:StartendexamComponent},
  {path:"user/exam", component:StartExamComponent},
  // {path:"startExam",component:StartExamComponent} ,
  // {path:"startExam/exam/report", component:ExamReportComponent},
  { path: 'user/register', component: AddUserComponent },
  { path: 'user/login', component: LoginComponent },
  {path: "user/home", component: UserHomeComponent},
  { path: 'logout', component: LogoutComponent },
  {path:'user/exams', component:ChooseExamComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AdminHomeComponent,StartendexamComponent,StartExamComponent,ExamReportComponent];

