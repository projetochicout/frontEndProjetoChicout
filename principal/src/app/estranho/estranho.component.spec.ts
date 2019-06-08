import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstranhoComponent } from './estranho.component';

describe('EstranhoComponent', () => {
  let component: EstranhoComponent;
  let fixture: ComponentFixture<EstranhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstranhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstranhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
