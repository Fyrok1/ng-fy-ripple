import { TestBed } from '@angular/core/testing';

import { NgFyRippleService } from './ng-fy-ripple.service';

describe('NgFyRippleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFyRippleService = TestBed.get(NgFyRippleService);
    expect(service).toBeTruthy();
  });
});
