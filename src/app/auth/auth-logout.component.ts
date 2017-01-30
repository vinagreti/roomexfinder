import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-logout',
  template: 'Logout',
  styleUrls: ['./auth.component.scss']
})
export class AuthLogoutComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
