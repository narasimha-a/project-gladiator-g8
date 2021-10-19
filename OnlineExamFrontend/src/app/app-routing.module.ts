import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StartendexamComponent } from './startendexam/startendexam.component';


const routes: Routes = [
  {path: "adminHome", component: AdminHomeComponent},
  {path:"exam", component:StartendexamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AdminHomeComponent,StartendexamComponent];