import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitaoComponent } from './capitao.component';

describe('CapitaoComponent', () => {
  let component: CapitaoComponent;
  let fixture: ComponentFixture<CapitaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
