/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { FinderService } from './finder.service';

describe('Service: Finder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        FinderService,
      ]
    });
  });

  it('should create an instance', inject([FinderService], (service: FinderService) => {
    expect(service).toBeTruthy();
  }));

  it('should alert whe the response is an error', inject([FinderService], (service: FinderService) => {
    let promise = service.handleRejection({status:500});
    promise.then(function(){}, function(reason) {
       expect(reason).toBe(service.responseMessages.error);
     });
  }));

  it('should ask for login when get a HTTP 401', inject([FinderService], (service: FinderService) => {
    let promise = service.handleRejection({status:401});
    promise.then(function(){}, function(reason) {
       expect(reason).toBe(service.responseMessages.notLogged);
     });
  }));

});
