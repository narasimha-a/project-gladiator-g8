import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamPayload} from "./exam-editor/exam-payload";
import { Observable } from 'rxjs';
import { Exam } from './exam';
import {UserExamPayload} from "./user-exam/user-exam-payload";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  baseUrl = "http://localhost:8282";

  constructor(private httpClient : HttpClient) { }

  getExamByExamId(examId : number){
    return this.httpClient.get<ExamPayload>(this.baseUrl + "/admin/exams/" + examId);
  }

  postExam(reqBody: ExamPayload) {
    return this.httpClient.post(this.baseUrl + "/admin/exams/", reqBody);
  }

  getExamList(){
    return this.httpClient.get<Exam[]>(this.baseUrl + "/admin/exams");
  }

  addExam(exam:Exam){
    console.log("inside addExam method:exam:");
    console.log(exam);
    console.log(exam.levels)
    return this.httpClient.post<Exam>(this.baseUrl + "/admin/exams/",exam);
  }

  removeExam(exam:Exam){
    let id=exam.examId;
    return this.httpClient.delete(this.baseUrl+"/admin/exams/"+id, { responseType: 'text' });
  }

  getExamWithOutAnswersByExamId(examId: number) {
    return this.httpClient.get<UserExamPayload>(this.baseUrl + "/user/exams/" + examId);
  }
}
