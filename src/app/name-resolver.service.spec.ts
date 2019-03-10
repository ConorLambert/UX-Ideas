import { TestBed } from '@angular/core/testing';

import { NameResolverService } from './name-resolver.service';

describe('NameResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameResolverService = TestBed.get(NameResolverService);
    expect(service).toBeTruthy();
  });
});
