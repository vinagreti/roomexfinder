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

  private extractBody = (response :Response) => {
    let body;
    if (response.json()) {
      body = response.json().HotelPricingSummaries;
      return body;
    } else {
      body = response.text()
      return Promise.reject(body);
    }
  }

  private handleError = (res: any) => {
    return Promise.reject(res);
  }

  private handleRejection = (res: any) => {
    if(res.status == 401){
      alert('You must be logged to use do this test!')
    } else {
      alert('There is a problem calling Roomex Finder API! Please, try again in a few minutes.')
    }
    return Promise.reject(res);
  }

  search = () => {
    let url = this.roomexAipEndpoint + this.searchEndpoint
    return this.http.get(url)
     .toPromise()
     .then(this.extractBody, this.handleRejection)
     .catch(this.handleError);
  }
}
