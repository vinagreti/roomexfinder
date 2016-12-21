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

  private extractBodyHotel = (response :Response) => {
    let body;
    if (response.json()) {
      body = response.json();
      return body;
    } else {
      body = response.text()
      return Promise.reject(body);
    }
  }

  private extractBodySearch = (response :Response) => {
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

  get = (id) => {
    let url = this.roomexAipEndpoint + this.hotelEnpoint + id
    return this.http.get(url)
     .toPromise()
     .then(this.extractBodyHotel, this.handleRejection)
     .catch(this.handleError);
  }

  search = () => {
    let url = this.roomexAipEndpoint + this.searchEndpoint
    return this.http.get(url)
     .toPromise()
     .then(this.extractBodySearch, this.handleRejection)
     .catch(this.handleError);
  }

}
