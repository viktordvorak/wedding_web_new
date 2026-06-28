import { TestBed } from '@angular/core/testing';

import { RvspServiceService } from './rvsp-service.service';

describe('RvspServiceService', () => {
  let service: RvspServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RvspServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
