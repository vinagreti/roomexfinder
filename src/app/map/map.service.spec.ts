/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapService } from './map.service';

describe('MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MapService
      ]
    });
  });

  it('should create an instance', inject([MapService], (service: MapService) => {
    expect(service).toBeTruthy();
  }));

  it('should return correct map url', inject([MapService], (service: MapService) => {
    expect(service.getByLatLng(['lat', 'lng'])).toBe(service.getMapUrl()+'lat,lng');
  }));
});
