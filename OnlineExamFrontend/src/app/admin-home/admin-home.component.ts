import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addQuestions = () => {
    this.router.navigate(['/admin/addQuestions']);
  }

  removeQuestions = () => {
    this.router.navigate(['/admin/removeQuestions']);
  }

  viewReports = () => {
    this.router.navigate(['/admin/viewReports']);
  }


  adminLogout = () => {
    this.router.navigate(['/']);
  }
}
