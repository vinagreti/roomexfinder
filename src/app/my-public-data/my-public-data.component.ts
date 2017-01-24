import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MyPublicDataService } from './my-public-data.service';

@Component({
  selector: 'app-my-public-data',
  templateUrl: './my-public-data.component.html',
  styleUrls: ['./my-public-data.component.scss']
})
export class MyPublicDataComponent implements OnInit {

  myPublicDataForm: FormGroup;

  private public_data: any;

  constructor(
    private myPublicDataService: MyPublicDataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getPublicData();
    this.createPubliDataForm();
  }

  getPublicData(){
    this.myPublicDataService.get().then((public_data) => {
      this.public_data = public_data;
    });
  }

  getCepInfo(){
    this.myPublicDataService.get().then((public_data) => {
      this.public_data = public_data;
    }); 
  }

  createPubliDataForm(){
    this.myPublicDataForm = this.formBuilder.group({
      consume: ['', [Validators.required]],
      kind: ['', [Validators.required]],
      production: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      site: ['', [Validators.required]],
    });
  }

  savePublicData(){
    console.log('saving')
  }

}
