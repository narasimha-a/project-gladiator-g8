import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['/admin/login']);
  }

  navigateToExams() {
    this.router.navigate(["../exams"],{relativeTo:this.route})
  }

  navigateToSearch() {
    this.router.navigate(["../searchStudents"],{relativeTo:this.route})
  }
}
