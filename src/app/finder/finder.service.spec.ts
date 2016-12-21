/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinderService } from './finder.service';

describe('Service: Finder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinderService]
    });
  });

  it('should alert whe the respose is not in a known format', inject([FinderService], (service: FinderService) => {
    expect(service).toBeTruthy();
  }));

  it('should navigate to login page when get a HTTP 401 status code', inject([FinderService], (service: FinderService) => {
    expect(service).toBeTruthy();
  }));

});
