import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { exam } from './startendexam/model/exam.model';
import { submission } from './startendexam/model/submission.model';
import { examleveldto } from './startendexam/model/examleveldto.model';

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
    
    return this.http.get<exam>(this.examUrl+'/'+78); 
  }

  createUserSubmission(userId:number, examId:number){

    return this.http.get<submission>(this.submissiondtoUrl+ '/' + userId + '/' +"exams" +'/'+ examId);
    

  }


  sendEvaluationInfo(addexamleveldto:examleveldto){
    
    return this.http.post<examleveldto>(this.sendEvaluation, addexamleveldto,this.options );
  }

  
  



}
