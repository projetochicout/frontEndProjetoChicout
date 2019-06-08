import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoletonComponent } from './moleton.component';

describe('MoletonComponent', () => {
  let component: MoletonComponent;
  let fixture: ComponentFixture<MoletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
