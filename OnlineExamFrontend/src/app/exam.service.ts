import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from './exam';
import { SearchStudentDto } from './search-student-dto';
import { admindto } from './admin-login/models/admindto';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = 'http://localhost:8091/admin/exams';

  constructor(private httpSer: HttpClient) { }

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
    var id=exam.examId;
    return this.httpSer.delete(this.baseUrl+"/"+id, { responseType: 'text' });
  }

  searchStudents():Observable<String[]>{
    console.log("inside searchstudents")
    this.baseUrl='http://localhost:8091/admin';
    return this.httpSer.get<String[]>(this.baseUrl+"/searchStudents");
  }

  validateAdmin(admin:admindto){
    this.baseUrl='http://localhost:8091/admin';
    return this.httpSer.post<Boolean>(this.baseUrl+"/login",admin);
  }
}
