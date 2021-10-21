import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TSMap } from 'typescript-map';
import { StartendexamService } from '../startendexam.service';
import { SubmissionService } from '../submission.service';
import {UserService} from '../user.service';
import { exam } from './model/exam.model';
import { ExamLevelDto } from './model/examleveldto.model';




import { submissionDto } from './model/submissionDto.model';


@Component({
  
  selector: 'app-startendexam',
  templateUrl: './startendexam.component.html',
  styleUrls: ['./startendexam.component.css']
})
export class StartendexamComponent implements OnInit {
  currentExam!: exam;

  optionStyle!:string;
  examList: exam[]= [];
  options: string[] = [];
  option!: string;
  numberOfLevels!: number;
  answerOption!:string;
  qnId!:number;
  ansOptions: string[] = [];
  questionId!:string;
  answers: string[] = [];  
  submission!: submissionDto;
  optionList: string = "";
  qnProgress: number=0;
  examSubmit!: ExamLevelDto;
  optionMap: TSMap<number,string> = new TSMap();
  optMap!: Map<string,string>;
  constructor(private startendexam: StartendexamService, private router:Router,private submissionService:SubmissionService, private userService:UserService) { }
  optString!: string;
  status = '';

  currentLevel:number=0;
  percentages:string[]=[];


  

  
  ngOnInit(): void {
    this.optString = "[O0,O1,O2,O3]";
   // console.log(this.optString.substring(1,this.optString.length-1).split(","));
    this.getExamById(Number(sessionStorage.getItem("examId")));
    
    console.log("printing this!!!");
    this.getSubmissionId();
    

    if(sessionStorage.getItem("currentLevel")){
      this.currentLevel = Number(sessionStorage.getItem("currentLevel"));

    }
    
  }



  getExamById(examId:number){
    
    this.startendexam.getExamById(examId).subscribe(data =>{
      this.currentExam= data;
      this.numberOfLevels = this.currentExam.levels.length;
      sessionStorage.setItem("numberOfLevels",this.numberOfLevels.toString());
      sessionStorage.setItem("currentLevel",this.currentLevel.toString());
      // this.getExamOnLevel();
      //this.currentLevel=this.currentExam.levels;
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
    if(sessionStorage.getItem("submissionId")){
      this.submissionService.getSubmissionBySubmissionId(Number(sessionStorage.getItem("submissionId"))).subscribe(sub => {
        this.submission = sub;
        console.log(this.submission);
      },(error)=>{
        console.log("No data found");
      })
    }
    else{
      this.submissionService.getSubmissionByExamIdAndUserId(Number(sessionStorage.getItem("examId")),Number(sessionStorage.getItem("userId"))).subscribe(sub => {
        this.submission = sub;
        console.log(this.submission);
        sessionStorage.setItem("submissionId",JSON.stringify(this.submission.submissionId));
      },(error)=>{
        console.log("No submission id");
      })
    }
    
  }

  getExamOnLevel(){
    
    if(this.submission.percentages == null){
      this.currentLevel= 0 ;
    }

    console.log(this.currentExam.levels[this.currentLevel].questions[0]);
    // this.percentages = this.submission.percentages.split(",");

    // this.currentLevel= this.percentages.length;
    sessionStorage.setItem("currentLevel",JSON.stringify(this.currentLevel));

   
    console.log(this.currentLevel)


  }


 
  onSelectOption = (qnId:number,choice:string) => {
    this.option = choice;
    this.optionStyle = choice;
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
    this.optionMap.set(this.qnId,"["+this.option+"]");
    this.qnProgress++;
    console.log(this.optionMap);
    
    if(this.qnProgress == this.currentExam.levels[this.currentLevel].questions.length){
      
      
      this.examSubmit = {
        examId: this.currentExam.examId,
        examLevelId: this.currentExam.levels[this.currentLevel].examLevelId,
        submissionId: Number(sessionStorage.getItem("submissionId")),
        passingCriteria: this.currentExam.levels[this.currentLevel].passingCriteria,
        selectedOptionsMap: this.optionMap
      }
      this.userService.postSubmission(this.examSubmit, Number(sessionStorage.getItem("userId"))).subscribe(data => {
        console.log(data);
      })
      console.log(this.examSubmit);
      console.log(this.examSubmit.passingCriteria);
      this.router.navigate(['/startExam/exam/report'], { queryParams: {passingCriteria:this.examSubmit.passingCriteria}});
    }
    console.log(this.answers);
  }

}


