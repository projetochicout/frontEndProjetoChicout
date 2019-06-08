import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moleton02Component } from './moleton02.component';

describe('Moleton02Component', () => {
  let component: Moleton02Component;
  let fixture: ComponentFixture<Moleton02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moleton02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moleton02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
