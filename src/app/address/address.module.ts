import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressService } from './address.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AddressService
  ],
  declarations: [
    AddressComponent
  ]
})
export class AddressModule { }
