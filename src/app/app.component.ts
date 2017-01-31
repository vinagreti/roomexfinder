import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FOEco';
  user: any;

  constructor(
  	private authService: AuthService
  ){}

  ngOnInit(){
  	this.authService.user.subscribe(user => this.user = user);
  }

}
