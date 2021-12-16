/* eslint-disable prefer-const */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'New Application';
  keyword = '';
  authorFilter = '';
  startDate = '';
  endDate = '';
  today = new Date();
  articles: any = null;
  displayedArticles: any = null;
  everythingDisplay: any = [];

  constructor(private http: HttpClient) {}

  //Function used for getting data after submit button on form has been pressed.
  submit(data) {
    let monthStart = data.startDate.getMonth() + 1;
    let monthEnd = data.endDate.getMonth() + 1;
    let startingDate =
      data.startDate.getFullYear() +
      '-' +
      monthStart +
      '-' +
      data.startDate.getDate();
    let endingDate =
      data.endDate.getFullYear() +
      '-' +
      monthEnd +
      '-' +
      data.endDate.getDate();

    //getting data from the newsAPI
    let newsApiUrl =
      'https://newsapi.org/v2/everything?q=' +
      data.keyword +
      '&from=' +
      startingDate +
      '&to=' +
      endingDate +
      '&apiKey=80837b960d8a4829bcba7d13bf826009';
    this.http.get(newsApiUrl).subscribe((data) => {
      console.log(data);
      this.articles = data;
      this.displayedArticles = data;
      this.everythingDisplay = this.displayedArticles.articles;
    });
  }

  //Function used for filltering available downloaded news articles based on author name. 
  //Finds all articles whose author name contains what was written in the input field.
  //Type All to show all of the articles again.
  onFilter() {
    this.displayedArticles = this.articles.articles.filter(
      (article) =>
        (article.author != null &&
          article.author
            .toUpperCase()
            .includes(this.authorFilter.toUpperCase())) ||
        this.authorFilter === 'All' ||
        this.authorFilter === 'all'
    );

    console.log(this.displayedArticles);

    this.everythingDisplay = this.displayedArticles;

    console.log(this.displayedArticles);

    this.authorFilter = '';
  }
}
