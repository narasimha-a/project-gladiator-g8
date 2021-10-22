import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username = 'admin'
  password = 'admin@123'
  invalidLogin = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin():void {
    if (this.username=="admin" && this.password=="admin@123")
    {
      this.router.navigate(['admin/home']);
    }
    else
    {
      alert("Invalid credentials");
    }
  }
}
