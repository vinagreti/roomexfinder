import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { FinderCenterComponent } from './finder-center.component';
import { FinderRoutingModule } from './finder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FinderRoutingModule
  ],
  declarations: [
    FinderComponent,
    FinderCenterComponent
  ]
})
export class FinderModule { }
