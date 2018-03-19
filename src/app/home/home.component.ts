import { Component, OnInit, Version } from '@angular/core';
import { VersionInfo } from '../ViewModels/versionInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public _Vinfo: VersionInfo;
  constructor() {
    this._Vinfo = {
      CompanyName:" InfoxTech Inc."
      , Version:"1.0.0"
      , Years :" 2017-18"
    }

  }

  ngOnInit() {

  }

}
