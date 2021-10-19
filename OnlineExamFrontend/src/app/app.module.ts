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

@NgModule({
  declarations: [
    AppComponent,
    StartendexamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    
    
  ],
  providers: [StartendexamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
