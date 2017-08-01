import { NewsService } from './../Services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from "../Models/News";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.css']
})
export class AppNewsComponent implements OnInit {

  NewsCol:News[];

  constructor(private newsSvc:NewsService) {

    this.NewsCol = new Array<News>();
   }

  ngOnInit() {
    this.newsSvc.GetNews().map((response) => {
      return response.json();
    }).subscribe((data) => {
      data.forEach(item => {

        this.NewsCol.push(new News( item.title , item.desc ))
      });
      console.log(this.NewsCol); 
       
    })
    console.log(this.NewsCol )
  }

}




