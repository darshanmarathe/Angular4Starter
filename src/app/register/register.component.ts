import { UserDataService } from './../Services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Obj = {
    id : 1,
    firstName : "Darshan",
    MiddleName : "Narayan",
    LastName : "Marathe",
    Age :34,
    Height :5.10
  }

  constructor() { }

  ngOnInit() {
   
  }


  onSubmit(user){
    console.log(user)
  }

}
