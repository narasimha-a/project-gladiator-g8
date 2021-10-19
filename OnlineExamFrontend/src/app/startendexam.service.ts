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
    return this.http.get<exam>(this.baseUrl+'/'+examid); 
  }

  getExamsList(){
    return this.http.get<exam>(this.baseUrl); 

  }
}
