
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './models/user';
import { UserLoginDto } from './user-login-dto';

@Injectable({
    providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://localhost:8282/user'; 

  constructor(private http: HttpClient){}

  addUser(user: User): Observable<User>{

    console.log(user);
    return this.http.post<User>(this.baseUrl, user);
  }
 

  //  authenticateUser(userlogindto) => {
  //   console.log(user);
  //   return this.http.get<UserLoginDto>(this.baseUrl, user);
  // }

  authenticateUser(user:UserLoginDto){ 
    
    console.log(user);
    return this.http.post<Boolean>(this.baseUrl+'/login',user);
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
}
