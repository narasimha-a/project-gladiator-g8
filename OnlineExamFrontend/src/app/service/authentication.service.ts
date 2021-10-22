import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {UserLoginDto} from '../user-login-dto';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  userLogin = false;

  currentLoginUser: User | undefined;

  constructor(private userService: UserService,) {
  }

  authenticate(username: string, password: string) {
    const userinfo = new UserLoginDto();
    userinfo.userName = username;
    const userValue = false;
    userinfo.password = password;

    this.userService.authenticateUser(userinfo).subscribe(data => {
      if (data) {
        this.currentLoginUser = data;
        console.log(this.currentLoginUser);
        console.log(data.userId);
        sessionStorage.setItem('userId', data.userId.toString());
        console.log(this.currentLoginUser);
      } else {

      }

    })

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
