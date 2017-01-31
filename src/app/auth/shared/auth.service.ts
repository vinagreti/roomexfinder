import { AngularFire, AuthProviders } from 'angularfire2';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class AuthService {

  public user: BehaviorSubject<any>;

  constructor( 
    private af: AngularFire,
  ) {
    this.user = new BehaviorSubject<any>({});
    this.subscribeNgFire();
  }

  private subscribeNgFire(){
    this.af.auth.subscribe(user => {
      this.user.next(user);
    });
  }

  private handleLoginError = (err) => {
    return err;
  }

  private handleLoginSuccess = (res) => {
    this.user.next(res);
    return res;
  }

  loginGoogle = () => {
    this.af.auth.login({
      provider: AuthProviders.Google
    }).then(this.handleLoginSuccess, this.handleLoginError);
  }

  loginFacebook = () => {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    })
    .then(this.handleLoginError);
  }

  loginGithub = () => {
    this.af.auth.login({
      provider: AuthProviders.Github
    }).then(this.handleLoginSuccess, this.handleLoginError);
  }

  loginTwitter = () => {
    this.af.auth.login({
      provider: AuthProviders.Twitter
    }).then(this.handleLoginSuccess, this.handleLoginError);
  }

  logout = () => {
    this.af.auth.logout();
    this.user.next(undefined);
  }

}
