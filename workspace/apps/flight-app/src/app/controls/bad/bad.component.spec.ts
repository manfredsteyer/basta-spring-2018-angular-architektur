/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BadComponent } from './bad.component';

describe('BadComponent', () => {
  let component: BadComponent;
  let fixture: ComponentFixture<BadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
