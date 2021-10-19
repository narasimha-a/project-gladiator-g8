import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {ExamEditorComponent} from "./exam-editor/exam-editor.component";

const routes: Routes = [
  {path: "admin/home", component: AdminHomeComponent},
  {path: "admin/examEditor", component: ExamEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AdminHomeComponent];
