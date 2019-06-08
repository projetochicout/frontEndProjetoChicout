import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegataComponent } from './regata.component';

describe('RegataComponent', () => {
  let component: RegataComponent;
  let fixture: ComponentFixture<RegataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
