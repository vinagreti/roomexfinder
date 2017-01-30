import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire
  ) {}

  ngOnInit() {
    this.articles = this.af.database.list('/article');
  }

  addArticle(){
    this.articles.push({name: 'iuhiuhiu'});
  }
}
