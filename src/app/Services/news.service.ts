import { News } from './../Models/News';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class NewsService {

  constructor(private http: Http) { }


  GetNews() {

    var arr = [];
   return  this.http.get("http://localhost:2403/news")
  }

}
