import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

  mapUrl = 'http://maps.google.com/?q=';

  constructor() { }

  getByLatLng = (coordenates: any[]) => {
    return this.mapUrl + coordenates.join(',');
  }

}
