import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: "adminHome", component: AdminHomeComponent},
  { path: 'addUser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [AdminHomeComponent];