import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartendexamService } from '../startendexam.service';
import { exam } from './model/exam.model';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-startendexam',
  templateUrl: './startendexam.component.html',
  styleUrls: ['./startendexam.component.css']
})
export class StartendexamComponent implements OnInit {
  currentExam!: Observable<exam>;
  examList: exam[]= []; 

  constructor(private startendexam: StartendexamService, private router:Router) { }

  ngOnInit(): void {
  }


  getExamById(examId:number){
    this.currentExam= this.startendexam.getExamById(examId);
    //console.log(this.currentExam);
  }

  getExams(){
     
    console.log(this.startendexam.getExamsList());

  }

  



}
