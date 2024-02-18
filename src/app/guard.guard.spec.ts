import { TestBed } from '@angular/core/testing';

import { AguardGuard } from './guard.guard';

describe('AguardGuard', () => {
  let guard: AguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
