import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartendexamService } from '../startendexam.service';
import { exam } from './model/exam.model';
import { examlevel } from './model/examlevel.model';
import { questions } from './model/questions.model';
import { submission } from './model/submission.model';
import { examleveldto } from './model/examleveldto.model';
// import { Observable } from 'rxjs'


@Component({
  selector: 'app-startendexam',
  templateUrl: './startendexam.component.html',
  styleUrls: ['./startendexam.component.css']
})
export class StartendexamComponent implements OnInit {
  currentExam!: exam;
  currentLevel !: examlevel[]; 
  currentQuestion !: questions[] ;
  currentExamLevel :number=0;

  newuserSubmission!: submission;
  submissionTempId!: submission; 

  examList: exam[]= []; 
  examName:string="";

  options: string[] = [];
  answers: string[] = [];  
  optionList: string = "";

  constructor(private startendexam: StartendexamService, private router:Router) { }

  ngOnInit(): void {
    this.getExamById(78);
    //this.createUserSubmission(10001 , 1001);
  }

  getExamById(examId:number){
    
    this.startendexam.getExamById(examId).subscribe(data =>{
      this.currentExam= data;
      this.currentLevel= this.currentExam.levels;
      this.currentQuestion=this.currentLevel[0].questions;
      console.log(this.currentExam);
      console.log(this.currentLevel);
      console.log(this.currentQuestion[0].options);
    }, (error) => {console.log("no data found");
    })
    
  }

// create a local storage of userId and examId : remove when logged out
  createUserSubmission(userId:number, examId:number){
    this.startendexam.createUserSubmission(userId,examId).subscribe(data=> {
      this.newuserSubmission=data;
      console.log(this.newuserSubmission);

    }, (error) => {console.log("no submission data available")})


  }


  onSubmission(userexamendSubmission:examleveldto){
    
    userexamendSubmission.examId = localStorage.examId;
    userexamendSubmission.examLevelId = this.currentLevel[this.currentExamLevel].examLevelId;
    userexamendSubmission.submissionId = this.submissionTempId.submissionId;
    userexamendSubmission.passingCriteria=this.currentLevel[this.currentExamLevel].passingCriteria;
    userexamendSubmission.selectedOptionsMap;

  }






}


