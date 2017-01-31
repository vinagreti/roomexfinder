import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/shared/auth.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: [
		'./home.component.scss'
	]
})

export class HomeComponent implements OnInit {

	user: any;

	constructor(
		private authService: AuthService
	){}

	title = 'Feira Orgâniva e Ecológica';

	ngOnInit(){
		this.authService.user.subscribe(user => this.user = user);
	}
}
