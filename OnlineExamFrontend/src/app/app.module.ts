import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ExamEditorComponent} from './exam-editor/exam-editor.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AddExamComponent} from "./add-exam/add-exam.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {ModifyExamComponent} from "./modify-exam/modify-exam.component";
import {ModifyExamChildComponent} from "./modify-exam-child/modify-exam-child.component";
import {ExamReportComponent} from "./exam-report/exam-report.component";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    ExamEditorComponent,
    AddExamComponent,
    AdminLoginComponent,
    ModifyExamComponent,
    ModifyExamChildComponent,
    ExamReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRippleModule
  ],
  providers: [
    {
      provide:MatDialogRef,
      useValue:[]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
