import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamPayload} from "./exam-editor/exam-payload";
import { Observable } from 'rxjs';
import { Exam } from './exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  baseUrl = "http://localhost:8282/admin";

  constructor(private httpClient : HttpClient) { }

  getExamByExamId(examId : number){
    return this.httpClient.get<ExamPayload>(this.baseUrl + "/exams/" + examId);
  }

  postExam(reqBody: ExamPayload) {
    return this.httpClient.post(this.baseUrl + "/exams/", reqBody);
  }
  // private baseUrl = 'http://localhost:8091/admin/exams';

  getExamList(): Observable<Exam[]> {
    return this.httpSer.get<Exam[]>(this.baseUrl);
  }

  addExam(exam:Exam):Observable<Exam>{
    console.log("inside addExam method:exam:");
    console.log(exam);
    console.log(exam.levels)
    return this.httpSer.post<Exam>(this.baseUrl,exam);
  }

  removeExam(exam:Exam): Observable<any> {
    let id=exam.examId;
    return this.httpSer.delete(this.baseUrl+"/"+id, { responseType: 'text' });
  }
}
