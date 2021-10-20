import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { exam } from './startendexam/model/exam.model';
import { ExamLevelDto } from './startendexam/model/examleveldto.model';

import { submissionDto } from './startendexam/model/submissionDto.model';

@Injectable({
  providedIn: 'root'
})
export class StartendexamService {

  examUrl:string="http://localhost:8282/admin/exams";
  submissiondtoUrl:string= "http://localhost:8282/user";
  sendEvaluation:string = "http://localhost:8282/user/submission";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http:HttpClient) { }

  getExamById(examid:number){
    //console.log(this.http.get<exam>(this.examUrl+'/'+148));
    return this.http.get<exam>(this.examUrl+'/'+97); 
  }

  createUserSubmission(userId:number, examId:number){

    return this.http.get<submissionDto>(this.submissiondtoUrl+ '/' + userId + '/' +"exams" +'/'+ examId);
    

  }


  sendEvaluationInfo(addexamleveldto:ExamLevelDto){
    
    return this.http.post<ExamLevelDto>(this.sendEvaluation, addexamleveldto,this.options );
  }

  
  




}
