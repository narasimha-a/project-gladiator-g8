import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyExamComponent } from './modify-exam/modify-exam.component';

const routes: Routes = [
  {path:'admin/exams/getExamData',component:ModifyExamComponent},
  {path:'admin/exams/addExamData',component:AddExamComponent},
  {path:'admin/exams/updateExam',component:ModifyExamChildComponent}

];
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExamReportComponent } from './exam-report/exam-report.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { StartendexamComponent } from './startendexam/startendexam.component';
import {ExamEditorComponent} from "./exam-editor/exam-editor.component";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddUserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChooseExamComponent } from './choose-exam/choose-exam.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {ViewReportsComponent} from "./view-reports/view-reports.component";

const routes: Routes = [
  {path:"admin/login",component:AdminLoginComponent},
  {path:"admin/home", component: AdminHomeComponent},
  {path:'admin/exams',component:ModifyExamComponent},
  {path:"admin/exams/:examId", component: ExamEditorComponent},
  {path:"admin/viewReports", component: ViewReportsComponent},

  {path:"startExam/exam", component:StartendexamComponent},
  {path:"startExam",component:StartExamComponent} ,
  {path:"startExam/exam/report", component:ExamReportComponent},
  {path: "admin/home", component: AdminHomeComponent},
  {path: "admin/examEditor", component: ExamEditorComponent},
  { path: 'addUser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {path:'allExams', component:ChooseExamComponent}
]






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AdminHomeComponent,StartendexamComponent,StartExamComponent,ExamReportComponent];

