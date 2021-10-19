import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router : Router) { }

  questions : any = [
    {"qun" : "what is the capital of india ? ", "option" : ["delhi", "mumbai"], isHidden:false},
    {"qun" : "what is the capital of indi ? ", "option" : ["delhi", "mumbai"], isHidden:true}
  ]

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
