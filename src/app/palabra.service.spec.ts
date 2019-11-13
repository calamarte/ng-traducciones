import { TestBed } from '@angular/core/testing';

import { PalabraService } from './palabra.service';

describe('PalabraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalabraService = TestBed.get(PalabraService);
    expect(service).toBeTruthy();
  });
});
