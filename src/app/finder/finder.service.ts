import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FinderService {
  roomexAipEndpoint = "http://roomex.mockable.io/"
  searchEndpoint = "locationSearch"
  hotelEnpoint = "hotel/"

  constructor(
    private http: Http
  ) { }

  search(){
    let url = this.roomexAipEndpoint + this.searchEndpoint
    return this.http.get(url)
     .toPromise()
     .then(this.extractBody, this.handleRejection)
     .catch(this.handleError);
  }

  private extractBody(response :Response){
    let body;
    if (response.text()) {
        body = response.json().results || response.json();
    }
    return body || {};
  }

  private handleError = (res: any) => {
    return Promise.reject(res);
  }

  private handleRejection = (res: any) => {
    if(res.status == 401){
      alert('You must be logged to use the Roomex API - This part is no handled yet!')
    } else {
      alert('There is a problem calling Roomex API. - This part is no handled yet!')
    }
    return Promise.reject(res);
  }
}
