import { ThrowStmt } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { TSMap } from 'typescript-map';
import { StartendexamService } from '../startendexam.service';
import { SubmissionService } from '../submission.service';
import {UserService} from '../user.service';
import { exam } from './model/exam.model';
import { examlevel } from './model/examlevel.model';
import { ExamLevelDto } from './model/examLevelDto.model';
import { submissionDto } from './model/submissionDto.model';
// import { Observable } from 'rxjs'


@Component({
  selector: 'app-startendexam',
  templateUrl: './startendexam.component.html',
  styleUrls: ['./startendexam.component.css']
})
export class StartendexamComponent implements OnInit {
  currentExam!: exam;
  examList: exam[]= [];
  options: string[] = [];
  option!: string;
  answerOption!:string;
  qnId!:number;
  ansOptions: string[] = [];
  questionId!:string;
  answers: string[] = [];  
  submission!: submissionDto;
  optionList: string = "";
  qnProgress: number=0;
  examSubmit!: ExamLevelDto;
 // optionMap: TSMap<number,string> = new TSMap();
  optMap!: Map<string,string>;
  constructor(private startendexam: StartendexamService, private router:Router,private submissionService:SubmissionService, private userService:UserService) { }
  optString!: string;
  status = '';
  ngOnInit(): void {
    this.optString = "[O0,O1,O2,O3]";
    console.log(this.optString.substring(1,this.optString.length-1).split(","));
    this.getExamById(166);
    console.log(this.getSubmissionId());
    this.getSubmissionId();
  }



  getExamById(examId:number){
    
    this.startendexam.getExamById(examId).subscribe(data =>{
      this.currentExam= data;
      console.log(this.currentExam);
      // this.qnProgress = this.currentExam.levels[0].questions.length 
      // console.log(this.qnProgress);
    }, (error) => {console.log("no data found");
    })

    

    
  }

  getSplitString = (optString : string) => {
     this.options = optString.substring(1,optString.length-1).split(",");
    //  console.log(this.options);
     return this.options;
  }

  storeOption = () => {
    this.answers.push(this.optionList);
    // console.log(this.answers);
  }

  getSubmissionId = () => {
    this.submissionService.getSubmissionByExamIdAndUserId(166,160).subscribe(sub => {
      this.submission = sub;
      console.log(this.submission);
      sessionStorage.setItem("submissionId",JSON.stringify(this.submission.submissionId));
    },(error)=>{
      console.log("No submission id");
    })
  }
 
  onSelectOption = (qnId:number,choice:string) => {
    this.option = choice;
    this.qnId = qnId;
    this.status = 'active';
    console.log(this.option);
    console.log(this.qnId);
    // this.answerOption = form.contro
    // this.qnProgress++;
    // if(this.qnProgress == this.currentExam.levels[0].questions.length){
    //   this.router.navigate(['/']);
    // }
  }

  onSubmit = () => {
    console.log(this.qnId);
 //   this.optionMap.set(this.qnId,"["+this.option+"]");
    this.qnProgress++;
 //   console.log(this.optionMap);
    
    if(this.qnProgress == this.currentExam.levels[0].questions.length){
      
      
      this.examSubmit = {
        examId: this.currentExam.examId,
        examLevelId: this.currentExam.levels[0].examLevelId,
        submissionId: Number(sessionStorage.getItem("submissionId")),
        passingCriteria: this.currentExam.levels[0].passingCriteria,
     //   selectedOptionsMap: this.optionMap
      }
      this.userService.postSubmission(this.examSubmit, 80).subscribe(data => {
        this.userService.submissionData = data;
        console.log(this.userService.submissionData);
        this.router.navigateByUrl('/startExam/exam/report');
        console.log(data);
      })
      console.log(this.examSubmit);
      
    }
    console.log(this.answers);
  }

}
