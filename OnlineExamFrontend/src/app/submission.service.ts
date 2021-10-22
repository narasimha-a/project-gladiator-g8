import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { submissionDto } from './startendexam/model/submissionDto.model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  baseUrl:string="http://localhost:8282/home/exam/submission";

  constructor(private http:HttpClient) { }

  createNewSubmission(){
    return this.http.post<submissionDto>("http://localhost:8282/user/" + sessionStorage.getItem("userId") + "/exams/" + sessionStorage.getItem("examId"),{})
  }


  addNewSubmission(submission : submissionDto){
    // return this.http.get<exam>(this.baseUrl+'/'+114);
    return this.http.post<submissionDto>(this.baseUrl+'/addSubmission',{
      "examId":submission.examId,
      "userId":submission.userId,
      "addressId":submission.addressId,
      "percentages":submission.percentages
    });
  }

  getSubmissionBySubmissionId = (submissionId: number) => {
    return this.http.get<submissionDto>(this.baseUrl+'/SubmissionById/'+submissionId);
  }



  getSubmissionByExamIdAndUserId = (examId:number,userId:number) => {
    return this.http.get<submissionDto>(this.baseUrl+'/SubmissionByExamAndUserId/'+examId+'/'+userId);
  }
}
