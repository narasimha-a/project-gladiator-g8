import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './adduser/adduser.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AdminHomeComponent,
    AddUserComponent,
    LoginComponent,
    LogoutComponent,
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
