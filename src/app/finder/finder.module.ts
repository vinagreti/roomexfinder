import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdCardModule } from '@angular/material';
import { FinderComponent } from './finder.component';
import { FinderCenterComponent } from './finder-center.component';
import { FinderRoutingModule } from './finder-routing.module';
import { FinderService } from './finder.service';
import { MapModule } from '../map/map.module';

@NgModule({
  imports: [
    CommonModule,
    FinderRoutingModule,
    MapModule,
    MaterialModule,
    MdCardModule
  ],
  declarations: [
    FinderComponent,
    FinderCenterComponent
  ],
  providers: [
    FinderService
  ]
})
export class FinderModule { }
