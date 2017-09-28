import { UserDataService } from './../Services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../Models/User';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [UserDataService]
})
export class SideBarComponent implements OnInit {


  user:User;
  
  constructor(private userSrv:UserDataService) { }

  ngOnInit() {
    this.user = this.userSrv.Get();
    console.log("sidebar =>" , this.user)
  }

}
