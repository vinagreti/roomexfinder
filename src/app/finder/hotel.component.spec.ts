/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Rx';

import { FinderService } from './finder.service';
import { HotelComponent } from './hotel.component';

describe('HotelComponent', () => {
  let component: HotelComponent;
  let fixture: ComponentFixture<HotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HotelComponent
      ],
      imports: [
        MaterialModule,
        RouterModule,
      ],
      providers: [
        FinderService,
        { provide: ActivatedRoute, useValue: { params: Observable.of({id: 123}) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
