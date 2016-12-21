import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

  private mapUrl = 'http://maps.google.com/?q=';

  constructor() { }

  getMapUrl = () => {
    return this.mapUrl;
  }

  getByLatLng = (coordenates: any[]) => {
    return this.mapUrl + coordenates.join(',');
  }

}
