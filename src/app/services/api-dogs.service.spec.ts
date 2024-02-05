import { TestBed } from '@angular/core/testing';

import { ApiDogsService } from './api-dogs.service';

describe('ApiDogsService', () => {
  let service: ApiDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
