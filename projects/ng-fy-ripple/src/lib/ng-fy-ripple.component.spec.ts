import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFyRippleComponent } from './ng-fy-ripple.component';

describe('NgFyRippleComponent', () => {
  let component: NgFyRippleComponent;
  let fixture: ComponentFixture<NgFyRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFyRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFyRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
