import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { StartendexamComponent } from './startendexam/startendexam.component';
import {  HttpClientModule } from '@angular/common/http';
import { StartendexamService } from './startendexam.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import { StartExamComponent } from './start-exam/start-exam.component';
import { ExamReportComponent } from './exam-report/exam-report.component';
import { ExamEditorComponent } from './exam-editor/exam-editor.component';
import {MatInputModule} from "@angular/material/input";
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from "@angular/material/expansion";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './adduser/adduser.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChooseExamComponent } from './choose-exam/choose-exam.component';
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {ModifyExamComponent} from "./modify-exam/modify-exam.component";
import {ViewReportsComponent} from "./view-reports/view-reports.component";
import {MatSelectModule} from "@angular/material/select";
import { UserExamComponent } from './user-exam/user-exam.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { ExamReportDialogComponent } from './user-exam/exam-report-dialog/exam-report-dialog.component';
import {MatRippleModule} from "@angular/material/core";
import {GenericListFilterModule} from "generic-list-filter";
import { FilterStudentsComponentComponent } from './filter-students-component/filter-students-component.component';
import {ExamService} from "./exam.service";


@NgModule({
  declarations: [
    AppComponent,
    StartendexamComponent,
    AdminHomeComponent,
    StartExamComponent,
    ExamReportComponent,
    ExamEditorComponent,
    UserHomeComponent,
    RegisterComponent,
    AdminHomeComponent,
    AddUserComponent,
    LoginComponent,
    LogoutComponent,
    ChooseExamComponent,
    AdminLoginComponent,
    ModifyExamComponent,
    ViewReportsComponent,
    UserExamComponent,
    ExamReportDialogComponent,
    FilterStudentsComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    GenericListFilterModule,

    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatRippleModule
  ],
  providers: [StartendexamService,UserService,ExamService,{
    provide: MatDialogRef,
    useValue:[]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
