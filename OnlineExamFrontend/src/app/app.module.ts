import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StartendexamComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    
    
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [StartendexamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
