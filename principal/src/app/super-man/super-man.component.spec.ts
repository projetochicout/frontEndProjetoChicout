import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperManComponent } from './super-man.component';

describe('SuperManComponent', () => {
  let component: SuperManComponent;
  let fixture: ComponentFixture<SuperManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
