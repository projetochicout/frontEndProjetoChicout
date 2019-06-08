import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaviaoComponent } from './gaviao.component';

describe('GaviaoComponent', () => {
  let component: GaviaoComponent;
  let fixture: ComponentFixture<GaviaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaviaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaviaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
