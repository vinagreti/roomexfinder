import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdButtonToggleModule, MdSliderModule, MdIconModule, MdInputModule, MdUniqueSelectionDispatcher } from '@angular/material';
import { MyPublicDataComponent } from './my-public-data.component';
import { MyPublicDataRoutingModule } from './my-public-data-routing.module';
import { MyPublicDataService } from './my-public-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdSliderModule,
    MdIconModule,
    MdInputModule,
    MyPublicDataRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MyPublicDataComponent
  ],
  declarations: [
    MyPublicDataComponent
  ],
  providers: [
    MdUniqueSelectionDispatcher,
    MyPublicDataService
  ]
})
export class MyPublicDataModule { }
