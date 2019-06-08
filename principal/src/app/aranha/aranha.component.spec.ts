import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AranhaComponent } from './aranha.component';

describe('AranhaComponent', () => {
  let component: AranhaComponent;
  let fixture: ComponentFixture<AranhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AranhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AranhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
