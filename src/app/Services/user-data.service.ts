import { Injectable } from '@angular/core';

import { User } from './../Models/User';



@Injectable()
export class UserDataService {

  public user: User;


  constructor() {
    if (!localStorage.getItem("currentUser")) {
      this.user = new User();
      this.user.username = "";
      this.user.password = "";

    } else {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
    }

  }
  Get(): User {

    return this.user;

  }


  Set(_username: string, _password: string) {
    this.user.username = _username;
    this.user.password = _password;

    localStorage.setItem("currentUser", JSON.stringify(this.user));

  }




}


