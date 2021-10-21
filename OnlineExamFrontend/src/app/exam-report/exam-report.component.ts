import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamLevelDto } from '../startendexam/model/examLevelDto.model';
import { submissionDto } from '../startendexam/model/submissionDto.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exam-report',
  templateUrl: './exam-report.component.html',
  styleUrls: ['./exam-report.component.css']
})
export class ExamReportComponent implements OnInit {

  result!: submissionDto;
  percentage!:string[];
  currLevelPercentage!: number;
  constructor(private router: Router, private userService: UserService) {
     
   }

  ngOnInit(): void {
    this.getPercentage();
    this.currLevelPercentage = Number(this.percentage[this.percentage.length-1]);
  }

  getPercentage = () => {
    this.result = this.userService.submissionData;
    this.percentage = this.result.percentages.split(",");
    console.log("Inside report"+this.result.percentages);
  } 
  

}
