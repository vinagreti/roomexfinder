import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FinderService {
  roomexAipEndpoint = "//roomex.mockable.io/"
  searchEndpoint = "locationSearch"
  hotelEnpoint = "hotel/"
  responseMessages = {
    error: 'There is a problem calling Roomex Finder API! Please, try again in a few minutes.',
    notLogged: 'You must be logged to access this!'
  }

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

  handleRejection = (res: any) => {
    let response = res.status == 401 ? this.responseMessages.notLogged : this.responseMessages.error;
    return Promise.reject(response);
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
