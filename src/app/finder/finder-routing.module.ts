import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinderCenterComponent }    from './finder-center.component';
import { FinderComponent } from './finder.component';

const routes: Routes = [
  { path: '', component: FinderCenterComponent,
    children: [
      { path: '',     component: FinderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class FinderRoutingModule { }
