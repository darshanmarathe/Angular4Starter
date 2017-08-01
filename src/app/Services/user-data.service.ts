import { Injectable } from '@angular/core';

import { User } from './../Models/User';



@Injectable()
export class UserDataService {

 public user:User;


  constructor() {
    this.user = new User();
    this.user.username ="";
    this.user.password = "";


   }


  Get (): User {

    return this.user;

  }


  Set(_username:string , _password:string){
    this.user.username =_username;
    this.user.password = _password;
  }



  
}


