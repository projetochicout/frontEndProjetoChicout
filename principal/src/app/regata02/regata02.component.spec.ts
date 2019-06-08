import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regata02Component } from './regata02.component';

describe('Regata02Component', () => {
  let component: Regata02Component;
  let fixture: ComponentFixture<Regata02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regata02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regata02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
