import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShazanComponent } from './shazan.component';

describe('ShazanComponent', () => {
  let component: ShazanComponent;
  let fixture: ComponentFixture<ShazanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShazanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShazanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
