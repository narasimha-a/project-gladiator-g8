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

  submission:submissionDto = {
    submissionId:0,
    examId: 97,
    userId:101,
    addressId:100,
    percentages: ""
  };
  constructor(private submissionService:SubmissionService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onClickStartExam = () => {
    this.submissionService.addNewSubmission(this.submission).subscribe(data => {
      this.router.navigate(['/startExam/exam'])
      console.log(this.submission);
    },(error)=>{
      console.log("Add data failed");
    })
    
  }

}
