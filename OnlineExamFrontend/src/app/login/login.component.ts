import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../user.service";

export interface UserLoginPayload {
  userName: string;
  password: string
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginPayload!: UserLoginPayload;

  constructor(private router: Router,
              private userService: UserService,
              private route : ActivatedRoute) {
    this.userLoginPayload = {userName: "", password: ""};
  }

  ngOnInit() {

  }

  validateUser() {
    this.userService.authenticateUser(this.userLoginPayload).subscribe(data=>{
      if(data!=null){
        sessionStorage.setItem("userId", data.userId.toString());
        sessionStorage.setItem("addressId",String(data.address.addressId))
        this.router.navigate(["../home"], {relativeTo: this.route})
      }
    });
  }
}
