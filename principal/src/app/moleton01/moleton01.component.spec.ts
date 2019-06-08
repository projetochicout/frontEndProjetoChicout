import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moleton01Component } from './moleton01.component';

describe('Moleton01Component', () => {
  let component: Moleton01Component;
  let fixture: ComponentFixture<Moleton01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moleton01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moleton01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
