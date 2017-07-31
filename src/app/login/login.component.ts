import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  labels = {
    UserName: "Username",
    Password: "Password"
  }


  onSubmit(user) {
    console.log(user)
  }


  constructor() { }

  ngOnInit() {
  this.form = new FormGroup({
      username: new FormControl("Admin"),
      password: new FormControl("")
    });

  }

}
