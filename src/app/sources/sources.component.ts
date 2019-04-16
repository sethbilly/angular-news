import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  news;
  selected;
  sources = [
    {
      id: 'techcrunch',
      name: 'TechCrunch'
    },
    {
      id: 'the-wall-street-journal',
      name: 'The Wall Street Journal'
      },
      {
        id: 'cnn',
        name: 'CNN'
        },
        {
          id: 'usa-today',
          name: 'USA Today'
          },
          {
            id: 'cbs-news',
            name: 'CBS News'
            },
          ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.selected = this.sources[0].id;
    this.getData(this.selected);
  }

  getData(selected) {
    this.newsService.getData(`top-headlines?sources=${selected}`).subscribe( data => {
      this.news = data;
    });
  }

  sourcesChange(newValue) {
    // const newValue = event.target.value;
    console.log(newValue);
    this.selected = newValue;
    this.getData(this.selected);
  }

}
