import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { submissionDto } from '../startendexam/model/submissionDto.model';
import { UserService } from '../user.service';
import { SubmissionService } from '../submission.service';
@Component({
  selector: 'app-exam-report',
  templateUrl: './exam-report.component.html',
  styleUrls: ['./exam-report.component.css']
})
export class ExamReportComponent implements OnInit {

  reportLevel:number=0;
  reportPassingCriteria: number=0;

  currentLevel!:number;
  numberOfLevels!:number;

  result!: submissionDto;
  percentage!:string[];
  currLevelPercentage: number = 0;
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private submissionService: SubmissionService) {
    this.route.queryParams.subscribe(passingCriteria => {
      console.log(passingCriteria);
      console.log(passingCriteria['passingCriteria']);
      this.reportPassingCriteria = passingCriteria['passingCriteria'];
      console.log(this.reportPassingCriteria);
  });

   }

  ngOnInit(): void {
    
    this.getPercentage();
    if(sessionStorage.getItem("currentLevel")){
      this.currentLevel = Number(sessionStorage.getItem("currentLevel"));
    }
    if(sessionStorage.getItem("numberOfLevels")){
      this.numberOfLevels = Number(sessionStorage.getItem("numberOfLevels"));
    }
    
    if(this.currLevelPercentage >=  this.reportPassingCriteria){
      this.reportLevel =Number(sessionStorage.getItem("currentLevel")) +1;
      sessionStorage.setItem("currentLevel", this.reportLevel.toString());
      
    }
    else{
      sessionStorage.removeItem("currentLevel");

    }
  }
  
  getPercentage = () => {
    this.submissionService.getSubmissionBySubmissionId(Number(sessionStorage.getItem("submissionId"))).subscribe(sub => {
      this.result = sub;
      this.percentage = this.result.percentages.split(","); // "100"
      this.currLevelPercentage = Number(this.percentage[this.percentage.length-1]);
      console.log(this.currLevelPercentage);
      console.log(this.result);
    },(error)=>{
      console.log("No data found");
    })
    
    console.log("Inside report"+this.result.percentages);
  } 

  incrementExamLevel(){
    if(Number(sessionStorage.getItem("currentLevel")) == Number(sessionStorage.getItem("numberOfLevels"))){
      this.router.navigate(['/']);
    }
    else{
      this.router.navigate(['/startExam']);
    }
    
  }

  returnToHome(){
    this.router.navigate(['/'])
  }
}
