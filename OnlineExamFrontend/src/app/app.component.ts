import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineExamFrontend';
  hideLoginRegister = false;


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  register() {
    this.router.navigate(["./user/register"],{relativeTo: this.route});
    this.hideLoginRegister = true;
  }

  login() {
    this.router.navigate(["./user/login"],{relativeTo: this.route});
    this.hideLoginRegister = true;
  }
}
