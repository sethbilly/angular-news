import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  articles;
  constructor() { }

  ngOnInit() {
    this.getFavourties();
  }

  getFavourties() {
    const val = localStorage.getItem('items');
    if (val !== null) {
      this.articles = JSON.parse(val);
    }
  }

  onUnfavourite(article) {
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.articles));
  }

}
