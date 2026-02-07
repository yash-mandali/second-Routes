import { TestBed } from '@angular/core/testing';

import { UserApiservice } from './user-apiservice';

describe('UserApiservice', () => {
  let service: UserApiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
