import { TestBed } from '@angular/core/testing';

import { NgFySidebarService } from './ng-fy-sidebar.service';

describe('NgFySidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFySidebarService = TestBed.get(NgFySidebarService);
    expect(service).toBeTruthy();
  });
});
