import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { ArticleCenterComponent } from './article-center.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [ArticleCenterComponent, ArticleDetailComponent, ArticleListComponent],
  exports: [ArticleCenterComponent, ArticleDetailComponent, ArticleListComponent]
})
export class ArticleModule {

}
