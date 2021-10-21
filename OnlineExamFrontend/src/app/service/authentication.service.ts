import { Injectable } from '@angular/core';
import { UserLoginDto } from '../user-login-dto';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userService: UserService,) { }

 authenticate(username: string, password: string):boolean { 
   var userlogindto = new UserLoginDto();
   userlogindto.userName=username;
   userlogindto.password=password;
  this.userService.authenticateUser(userlogindto).subscribe(data=> {
    if(data){
      sessionStorage.setItem('username', username);
      console.log("stored");
      return true;
   } else {
     return false;
   }
  })
    
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
