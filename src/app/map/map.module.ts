import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapService } from './map.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyfb_uWORiEMl-MbFK6y1rhpFxWJg3s5o'
    })
  ],
  declarations: [
    MapComponent
  ],
  providers: [
    MapService
  ]
})
export class MapModule { }
