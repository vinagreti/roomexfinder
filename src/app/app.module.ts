import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, OVERLAY_PROVIDERS } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { RoomexfinderRoutingModule } from './app-routing.module';
import { MyPublicDataModule } from './my-public-data/my-public-data.module';
import { MapModule } from './map/map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpModule,
    MyPublicDataModule,
    MapModule,
    MaterialModule.forRoot(),
    RoomexfinderRoutingModule,
  ],
  providers: [
    OVERLAY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
