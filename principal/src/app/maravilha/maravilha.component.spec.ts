import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaravilhaComponent } from './maravilha.component';

describe('MaravilhaComponent', () => {
  let component: MaravilhaComponent;
  let fixture: ComponentFixture<MaravilhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaravilhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaravilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
