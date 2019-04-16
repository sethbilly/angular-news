import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.newsService.getData('top-headlines?country=us').subscribe(data =>{
      this.news = data;
    });
  }

  onFavourite(article) {
    console.log(article);

    let items = [];
    const val = localStorage.getItem('items');

    if (val !== null) {
      items = JSON.parse(val);
    }

    items.push(article);
    localStorage.setItem('items', JSON.stringify(items));

  }

}
