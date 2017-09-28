import { User } from './../Models/User';
import { UserDataService } from './../Services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';


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


  onSubmit(user:User) {
    this.userSrv.Set(user.username , user.password)
    this.router.navigate(["/todos"]);
  }


  constructor(private router: Router ,private userSrv:UserDataService) { }

  ngOnInit() {
  this.form = new FormGroup({
      username: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ])),
      password: new FormControl("", Validators.required)
    });

  }

}
