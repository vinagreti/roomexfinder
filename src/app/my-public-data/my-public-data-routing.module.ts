import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPublicDataComponent } from './my-public-data.component';

const routes: Routes = [
  { path: '', component: MyPublicDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyPublicDataRoutingModule { }
