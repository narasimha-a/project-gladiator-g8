import { ThrowStmt } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartendexamService } from '../startendexam.service';
import { exam } from './model/exam.model';
import { examlevel } from './model/examlevel.model';
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
  answers: string[] = [];  
  optionList: string = "";
  qnProgress: number=0;
  constructor(private startendexam: StartendexamService, private router:Router) { }
  optString!: string;
  ngOnInit(): void {
    this.optString = "[O0,O1,O2,O3]";
    console.log(this.optString.substring(1,this.optString.length-1).split(","));
    this.getExamById(114);
    
  }



  getExamById(examId:number){
    
    this.startendexam.getExamById(examId).subscribe(data =>{
      this.currentExam= data;
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
 
  onSelectOption = (choice:string) => {
    this.answers.push(choice);
    console.log(this.answers);
    this.qnProgress++;
    if(this.qnProgress == this.currentExam.levels[0].questions.length){
      this.router.navigate(['/']);
    }
  }



}
