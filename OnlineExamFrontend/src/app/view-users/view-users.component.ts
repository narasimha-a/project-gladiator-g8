import { Component, OnInit } from '@angular/core';

export interface ViewUserPayload{
  name:String;
}

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
