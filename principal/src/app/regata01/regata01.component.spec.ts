import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regata01Component } from './regata01.component';

describe('Regata01Component', () => {
  let component: Regata01Component;
  let fixture: ComponentFixture<Regata01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regata01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regata01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
