import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ProfileService } from './profile.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  profile: Profile = new Profile({});
  loadingData: boolean = true;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getProfile();
    this.createPubliDataForm();
  }

  getProfile = () => {
    this.loadingData = true;
    this.profileService.profile.subscribe(profile => {
      if(profile){
        this.loadingData = false;
        this.profile = profile;
      } else {
        console.log('Sem profile setado. Cria profile.')
      }
    });
  }

  createPubliDataForm(){
    this.profileForm = this.formBuilder.group({
      consume: [this.profile.consume, [Validators.required]],
      kind: [this.profile.kind, [Validators.required]],
      production: [this.profile.production, [Validators.required]],
      cep: [this.profile.cep, [Validators.required]],
      state: [this.profile.state, [Validators.required]],
      city: [this.profile.city, [Validators.required]],
      district: [this.profile.district, [Validators.required]],
      phone: [this.profile.phone, [Validators.required]],
      site: [this.profile.site, [Validators.required]],
    });
  }

  saveProfile = () => {
    let profile = this.profileForm.value;
    this.profileService.save(this.profileForm.value)
      .then((_profile) => {
        this.profile = profile;
      });
  }

}
