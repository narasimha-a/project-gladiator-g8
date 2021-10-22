import { Component, OnInit } from '@angular/core';
import {examDto} from "../startendexam/model/examDto";
import {ActivatedRoute, Router} from "@angular/router";
import {ChooseExamsServiceService} from "../choose-exams-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  allExams : examDto[]= [] ;

  exam!: examDto;

  constructor(private router:Router,
              private route: ActivatedRoute,
              private chooseexamandid:ChooseExamsServiceService) { }

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
    this.router.navigate(["../exam"],{relativeTo:this.route});
    //console.log(exam.examId);
  }

  logout(){

  }

}
