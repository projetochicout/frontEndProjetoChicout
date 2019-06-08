import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViuvaComponent } from './viuva.component';

describe('ViuvaComponent', () => {
  let component: ViuvaComponent;
  let fixture: ComponentFixture<ViuvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViuvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViuvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
