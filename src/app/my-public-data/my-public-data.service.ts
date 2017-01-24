import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class MyPublicDataService {

  constructor(
  	private http: Http
  ) { }

  get = () => {
  	return this.http.get('').toPromise();
  }

}
