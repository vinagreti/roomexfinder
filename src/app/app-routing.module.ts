import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finder', loadChildren: './finder/finder.module#FinderModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoomexfinderRoutingModule { }
