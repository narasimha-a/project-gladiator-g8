import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamLevelDto } from './startendexam/model/examLevelDto.model';
import { submissionDto } from './startendexam/model/submissionDto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:8282/user";
  submissionData!: submissionDto;
  constructor(private http:HttpClient) { }

  postSubmission(examLevelDto: ExamLevelDto, userId:number){
    // return this.http.get<exam>(this.baseUrl+'/'+114);
    console.log(JSON.stringify(examLevelDto));
    return this.http.post<submissionDto>(this.baseUrl+'/submitLevel',examLevelDto); 

  }

}
