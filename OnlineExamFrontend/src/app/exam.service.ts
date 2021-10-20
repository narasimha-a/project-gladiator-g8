import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamPayload} from "./exam-editor/exam-payload";

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
    return this.httpClient.post(this.baseUrl + "/exams/",reqBody);
  }
}
