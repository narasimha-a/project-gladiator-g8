import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserLoginDto } from '../user-login-dto';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userService: UserService,) { }
  currUser! : User;
 authenticate(username: string, password: string) { 
  const result = new Boolean;
   var userlogindto = new UserLoginDto();
   userlogindto.userName=username;
   var userValue = false;
   userlogindto.password=password;
  
  this.userService.authenticateUser(userlogindto).subscribe(data=> {
    if(data){
      this.currUser = data;
      console.log(data.userId);
      console.log(this.currUser);
      // sessionStorage.setItem('username', username);
      // userValue = true;
      console.log("stored");
      
   } 
  })
    
    console.log(this.currUser);
    return false;

    // if (username === username && password === password) {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
