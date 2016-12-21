/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterModule } from "@angular/router";

import { FinderComponent } from './finder.component';
import { FinderService } from './finder.service';

describe('Component: Finder', () => {
  let component: FinderComponent;
  let fixture: ComponentFixture<FinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FinderComponent
      ],
      imports: [
        MaterialModule,
        RouterModule
      ],
      providers: [
        FinderService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
