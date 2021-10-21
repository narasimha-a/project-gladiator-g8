import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { examDto } from './startendexam/model/examDto';

@Injectable({
  providedIn: 'root'
})
export class ChooseExamsServiceService {

  examlistURL:string  ="http://localhost:8282/user/exams";

  constructor(private httpser:HttpClient) { }

  getExamNameAndId(){

    return this.httpser.get<examDto[]>(this.examlistURL);
    
    
  }





}





