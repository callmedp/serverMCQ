import { TestBed } from '@angular/core/testing';

import { TestformService } from './testform.service';

describe('TestformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestformService = TestBed.get(TestformService);
    expect(service).toBeTruthy();
  });
});
