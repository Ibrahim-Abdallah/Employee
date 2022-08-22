import { TestBed } from '@angular/core/testing';

import { AnonGuardService } from './anon-guard.service';

describe('AnonGuardService', () => {
  let service: AnonGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnonGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
