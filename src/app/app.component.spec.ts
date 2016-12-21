/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { RoomexfinderRoutingModule } from './app-routing.module';

describe('App: Roomexfinder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HomeModule,
        MaterialModule.forRoot(),
        RoomexfinderRoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Roomex Finder');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#page-title').textContent).toContain('Roomex Finder');
  }));
});
