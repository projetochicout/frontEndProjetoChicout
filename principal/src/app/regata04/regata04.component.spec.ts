import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regata04Component } from './regata04.component';

describe('Regata04Component', () => {
  let component: Regata04Component;
  let fixture: ComponentFixture<Regata04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regata04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regata04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
