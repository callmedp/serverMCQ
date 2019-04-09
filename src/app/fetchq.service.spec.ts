import { TestBed } from '@angular/core/testing';

import { FetchqService } from './fetchq.service';

describe('FetchqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchqService = TestBed.get(FetchqService);
    expect(service).toBeTruthy();
  });
});
