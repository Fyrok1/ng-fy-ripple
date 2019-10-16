import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFySidebarComponent } from './ng-fy-sidebar.component';

describe('NgFySidebarComponent', () => {
  let component: NgFySidebarComponent;
  let fixture: ComponentFixture<NgFySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
