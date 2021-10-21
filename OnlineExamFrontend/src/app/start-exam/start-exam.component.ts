import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { submissionDto } from '../startendexam/model/submissionDto.model';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  submissionId: number = 0;
  submission:submissionDto = {
    submissionId:0,
    examId: 97,
    userId:122,
    addressId:121,
    percentages: ""
  };
  constructor(private submissionService:SubmissionService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("submissionId")){
      this.submissionId = Number(sessionStorage.getItem("submissionId"));
    }
  }

  

  // if(){

  // }

  // getSubmissionId = () => {
  //   this.submissionService.getSubmissionByExamIdAndUserId(176,181).subscribe(sub => {
  //     this.submission = sub;
  //     console.log(this.submission);
  //     sessionStorage.setItem("submissionId",JSON.stringify(this.submission.submissionId));
  //   },(error)=>{
  //     console.log("No submission id");
  //   })
  // }

  

  onClickStartExam = () => {
    if(this.submissionId == 0){
      this.submissionService.addNewSubmission(this.submission).subscribe(data => {
        this.router.navigate(['/startExam/exam'])
        console.log(this.submission);
      },(error)=>{
        console.log("Add data failed");
      })
    }
    else{
      this.router.navigate(['/startExam/exam'])
    }
    
    
  }

}
