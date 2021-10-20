import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { submissionDto } from '../startendexam/model/submissionDto.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exam-report',
  templateUrl: './exam-report.component.html',
  styleUrls: ['./exam-report.component.css']
})
export class ExamReportComponent implements OnInit {

  reportLevel:number=0;
  reportPassingCriteria: number=0;


  result!: submissionDto;
  percentage!:string[];
  currLevelPercentage!: number;
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(passingCriteria => {
      this.reportPassingCriteria = passingCriteria['passingCriteria'];
      
  });

   }

  ngOnInit(): void {
    this.getPercentage();
    this.currLevelPercentage = Number(this.percentage[this.percentage.length-1]);

    if(this.currLevelPercentage >=  this.reportPassingCriteria){
      this.reportLevel =Number(sessionStorage.getItem("currentLevel")) +1;
      sessionStorage.setItem("currentLevel", this.reportLevel.toString());
      
    }
    else{
      sessionStorage.removeItem("currentLevel");

    }
  }
  
  getPercentage = () => {
    this.result = this.userService.submissionData;
    this.percentage = this.result.percentages.split(",");
    console.log("Inside report"+this.result.percentages);
  } 

  incrementExamLevel(){
    this.router.navigate(['/startExam']);
  }
}
