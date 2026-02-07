import { TestBed } from '@angular/core/testing';

import { Productser } from './productser';

describe('Productser', () => {
  let service: Productser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
