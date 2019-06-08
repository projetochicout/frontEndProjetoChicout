import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regata03Component } from './regata03.component';

describe('Regata03Component', () => {
  let component: Regata03Component;
  let fixture: ComponentFixture<Regata03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regata03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regata03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
