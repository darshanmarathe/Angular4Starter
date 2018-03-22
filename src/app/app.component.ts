import { Component } from '@angular/core';
import { VersionInfo } from './ViewModels/versionInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _Vinfo: VersionInfo;

  title = 'Bookka Main App';

  constructor(){

    setTimeout(function() {
      this._Vinfo = {
        CompanyName:" InfoxTech Inc."
        , Version:"1.0.0"
        , Years :" 2017-18"
      }
      console.log(this._Vinfo)
    } , 1000);
  }
}
