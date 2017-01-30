import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleCenterComponent }    from './article-center.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleListComponent } from './article-list.component';

const _articleRoutes: Routes = [

  { path: '', component: ArticleCenterComponent,
    children: [
      { path: ':id',  component: ArticleDetailComponent },
      { path: '',     component: ArticleListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_articleRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ArticleRoutingModule { }
