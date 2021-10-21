import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineExamFrontend';
  isChkd:boolean=false;
  options:string[]= ['option 1','option 2','option 3','option 4'];

 
}
