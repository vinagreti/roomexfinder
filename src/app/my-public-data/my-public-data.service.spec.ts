/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyPublicDataService } from './my-public-data.service';

describe('MyPublicDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPublicDataService]
    });
  });

  it('should ...', inject([MyPublicDataService], (service: MyPublicDataService) => {
    expect(service).toBeTruthy();
  }));
});
