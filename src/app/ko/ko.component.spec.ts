/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KoComponent } from './ko.component';

describe('KoComponent', () => {
  let component: KoComponent;
  let fixture: ComponentFixture<KoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
