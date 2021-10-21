import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChooseExamsServiceService } from '../choose-exams-service.service';
import { examDto } from '../startendexam/model/examDto';

@Component({
  selector: 'app-choose-exam',
  templateUrl: './choose-exam.component.html',
  styleUrls: ['./choose-exam.component.css']
})
export class ChooseExamComponent implements OnInit {


  allExams : examDto[]= [] ;

  exam!: examDto;

  constructor(private router:Router, private chooseexamandid:ChooseExamsServiceService) { }

  ngOnInit(): void {

    this.getAllExams();
    //console.log(this.allExams[0]?.examName);
    
  }

  getAllExams(){
    this.chooseexamandid.getExamNameAndId().subscribe( data => {
     this.allExams=data;
     
     console.log(this.allExams + "inside data");


    })
    console.log("after data" + this.allExams);
  }

  OnMatCardClickEvent(exam:examDto){

    sessionStorage.setItem("examId" , exam.examId.toString());
    this.router.navigate(["/startExam"]);
   //console.log(exam.examId);
    }


}
