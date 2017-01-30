import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdButtonToggleModule, MdSliderModule, MdIconModule, MdInputModule, MdUniqueSelectionDispatcher } from '@angular/material';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';
import { JsonStorageModule } from './../json-storage/json-storage.module';
import { AuthService } from './../auth/shared/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdSliderModule,
    MdIconModule,
    MdInputModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    JsonStorageModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    MdUniqueSelectionDispatcher,
    ProfileService,
    AuthService
  ]
})
export class ProfileModule { }
