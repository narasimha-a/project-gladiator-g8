import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamLevelDto } from './startendexam/model/examleveldto.model';
import { submissionDto } from './startendexam/model/submissionDto.model';
import { Observable, throwError } from 'rxjs';
import { User } from './models/user';
import { UserLoginDto } from './user-login-dto';
import { catchError } from 'rxjs/operators';
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
  
  addUser(user: User): Observable<User>{

    console.log(user);
    return this.http.post<User>(this.baseUrl, user);
  }
  
  authenticateUser(user:UserLoginDto){ 
    
    console.log(user);
    
    return this.http.post<User>(this.baseUrl+'/login',user);
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    //Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }






  //  authenticateUser(userlogindto) => {
  //   console.log(user);
  //   return this.http.get<UserLoginDto>(this.baseUrl, user);
  // }

  


  

}
