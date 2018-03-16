import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  
  private _CompanyName : string;
  @Input()
  public get CompanyName() : string {
    return this._CompanyName;
  }
  public set CompanyName(v : string) {
    this._CompanyName = v;
  }
  
  private _Years : string = `${new Date().getFullYear()} - ${new Date().getFullYear() -1}`;
  @Input()
  public get Years() : string {
    return this._Years;
  }
  public set Years(v : string) {

    this._Years = v;
  }

  
  private _Version : string ="0.0.0";
  @Input()
  public get Version() : string {
    return this._Version;
  }
  public set Version(v : string) {
    this._Version = v;
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}
