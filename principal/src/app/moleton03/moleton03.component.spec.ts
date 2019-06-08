import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moleton03Component } from './moleton03.component';

describe('Moleton03Component', () => {
  let component: Moleton03Component;
  let fixture: ComponentFixture<Moleton03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moleton03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moleton03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
