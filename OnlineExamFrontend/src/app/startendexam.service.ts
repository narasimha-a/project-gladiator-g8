import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exam } from './startendexam/model/exam.model';

@Injectable({
  providedIn: 'root'
})
export class StartendexamService {

  baseUrl:string="http://localhost:8282/admin/exams";
  
  constructor(private http:HttpClient) { }

  getExamById(examid:number){
    console.log(this.http.get<exam>(this.baseUrl+'/'+114));
    return this.http.get<exam>(this.baseUrl+'/'+114); 
  }



}
