import { User } from './../Models/User';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../Services/user-data.service";

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {

  User:User;

  constructor(private userSrv:UserDataService) { }

  ngOnInit() {
      this.User = this.userSrv.user;

  }

}
