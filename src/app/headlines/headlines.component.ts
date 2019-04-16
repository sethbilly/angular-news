import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  news;
  categories = [
    'World',
    'Science',
    'Technology',
    'Sports',
    'Entertainment'
  ];

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  getCategoryData(category) {
    console.log(category);
    this.categoryData(category);
  }

  categoryData(category) {
    this.newService.getData(`everything?q=${category.toLowerCase()}`).subscribe( data => {
      this.news = data;
    });
  }

}
