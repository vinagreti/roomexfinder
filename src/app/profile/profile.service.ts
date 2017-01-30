import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from './../auth/shared/auth.service';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {

	private _profile: FirebaseObjectObservable<any>;
	public profile: BehaviorSubject<Profile>;

	constructor(
		private authService: AuthService,
		private af: AngularFire,
	){
		this._profile = this.af.database.object('/profile/');
		this.profile = new BehaviorSubject<Profile>(new Profile({}));
		this.authService.user.subscribe(user => {
			if(user.auth && user.auth.uid){
				this._profile = this.af.database.object('/profile/' + user.auth.uid);
				this._profile.subscribe(profile => {
					this.profile.next(profile);
				});
			}
		});
	}

	save(profile: Profile) {
		return this._profile.set(profile);
	}
	update(profile: Profile) {
		return this._profile.update(profile);
	}
	delete() {
		return this._profile.remove();
	}

}
