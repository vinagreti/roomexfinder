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
		this.profile = new BehaviorSubject<Profile>(undefined);
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
		let prof = this.sanitize(profile);
		return this._profile.set(prof);
	}
	update(profile: Profile) {
		return this._profile.update(profile);
	}
	delete() {
		return this._profile.remove();
	}

	sanitize(obj: any){
		let sanitized = {};
		Object.keys(obj).forEach(key => {
			if(obj[key]){
				sanitized[key] = obj[key];
			}
		});
		return sanitized;
	}

}
