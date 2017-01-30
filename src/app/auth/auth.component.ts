import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){
    this.authService.user.subscribe(user => {
      if(user){
        this.router.navigate(['/']);
      }
    });
  }

  loginGoogle = this.authService.loginGoogle;
  loginFacebook = this.authService.loginFacebook;
  loginGithub = this.authService.loginGithub;
  loginTwitter = this.authService.loginTwitter;
}
