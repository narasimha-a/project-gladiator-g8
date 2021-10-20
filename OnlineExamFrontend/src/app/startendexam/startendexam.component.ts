import { ThrowStmt } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartendexamService } from '../startendexam.service';
import { exam } from './model/exam.model';
import { examlevel } from './model/examlevel.model';
<<<<<<< HEAD
import { questions } from './model/questions.model';
import { submission } from './model/submission.model';
import { examleveldto } from './model/examleveldto.model';
=======
>>>>>>> dbafbb341f8c83e4d5b1df77e48a54a3a62308ff
// import { Observable } from 'rxjs'


@Component({
  selector: 'app-startendexam',
  templateUrl: './startendexam.component.html',
  styleUrls: ['./startendexam.component.css']
})
export class StartendexamComponent implements OnInit {
  currentExam!: exam;
<<<<<<< HEAD
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

=======
  examList: exam[]= [];
  options: string[] = [];
  answers: string[] = [];  
  optionList: string = "";
  qnProgress: number=0;
>>>>>>> dbafbb341f8c83e4d5b1df77e48a54a3a62308ff
  constructor(private startendexam: StartendexamService, private router:Router) { }
  optString!: string;
  ngOnInit(): void {
<<<<<<< HEAD
    this.getExamById(78);
    //this.createUserSubmission(10001 , 1001);
  }

=======
    this.optString = "[O0,O1,O2,O3]";
    console.log(this.optString.substring(1,this.optString.length-1).split(","));
    this.getExamById(114);
    
  }



>>>>>>> dbafbb341f8c83e4d5b1df77e48a54a3a62308ff
  getExamById(examId:number){
    
    this.startendexam.getExamById(examId).subscribe(data =>{
      this.currentExam= data;
<<<<<<< HEAD
      this.currentLevel= this.currentExam.levels;
      this.currentQuestion=this.currentLevel[0].questions;
      console.log(this.currentExam);
      console.log(this.currentLevel);
      console.log(this.currentQuestion[0].options);
=======
      // this.qnProgress = this.currentExam.levels[0].questions.length 
      // console.log(this.qnProgress);
>>>>>>> dbafbb341f8c83e4d5b1df77e48a54a3a62308ff
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

<<<<<<< HEAD


=======
  getSplitString = (optString : string) => {
     this.options = optString.substring(1,optString.length-1).split(",");
    //  console.log(this.options);
     return this.options;
  }

  storeOption = () => {
    this.answers.push(this.optionList);
    // console.log(this.answers);
  }
 
  onSelectOption = (choice:string) => {
    this.answers.push(choice);
    console.log(this.answers);
    this.qnProgress++;
    if(this.qnProgress == this.currentExam.levels[0].questions.length){
      this.router.navigate(['/']);
    }
  }
>>>>>>> dbafbb341f8c83e4d5b1df77e48a54a3a62308ff



}


