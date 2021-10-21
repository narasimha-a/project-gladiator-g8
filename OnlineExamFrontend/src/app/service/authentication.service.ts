import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserLoginDto } from '../user-login-dto';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  userLogin=false;

  currentLoginUser: User | undefined ;

  constructor(private userService: UserService,) { }

 authenticate(username: string, password: string) { 
   var userlogindto = new UserLoginDto();
   userlogindto.userName=username;
   var userValue = false;
   userlogindto.password=password;
   
  this.userService.authenticateUser(userlogindto).subscribe(data=> {
    if(data){
      this.currentLoginUser = data;
      console.log(this.currentLoginUser);
      console.log(data.userId);
      // sessionStorage.setItem('username', data.userName.toString());
      // sessionStorage.setItem('userId',data.userId.toString());
      // console.log("stored");
      // this.userLogin=true;
      // sessionStorage.setItem("userLogin", "true");
      // console.log(this.userLogin+" after true");
      //return this.userLogin;
   }

    })
    // if(this.currentLoginUser != null){
    //   sessionStorage.setItem("userId",this.currentLoginUser.userId.toString());
    //   return true;
    // }else{
    //   return false;
    // }
    return false;

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
