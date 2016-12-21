/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Component: Home', () => {

  it('should create an instance', () => {
    let component = new HomeComponent();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Home'`, async(() => {
    let component = new HomeComponent();
    expect(component.title).toEqual('Home');
  }));

});
