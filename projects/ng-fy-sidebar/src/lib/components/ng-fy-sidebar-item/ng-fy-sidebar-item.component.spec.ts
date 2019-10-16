import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFySidebarItemComponent } from './ng-fy-sidebar-item.component';

describe('NgFySidebarItemComponent', () => {
  let component: NgFySidebarItemComponent;
  let fixture: ComponentFixture<NgFySidebarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFySidebarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFySidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
