import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', loadChildren: './article/article.module#ArticleModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'map', loadChildren: './map/map.module#MapModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoomexfinderRoutingModule { }
