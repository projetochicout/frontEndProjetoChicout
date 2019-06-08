import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moleton04Component } from './moleton04.component';

describe('Moleton04Component', () => {
  let component: Moleton04Component;
  let fixture: ComponentFixture<Moleton04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moleton04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moleton04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
