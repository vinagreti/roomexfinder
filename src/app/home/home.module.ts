import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
  	HomeComponent
  ],
  imports: [
  	CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomeModule {}
