import { Component, OnInit, Input } from '@angular/core';
import { VersionInfo } from '../ViewModels/versionInfo';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  @Input()
  vinfo:VersionInfo;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
