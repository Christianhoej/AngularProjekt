import { TestBed } from '@angular/core/testing';

import { AnnonceDataService } from './annonce-data.service';

describe('AnnonceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceDataService = TestBed.get(AnnonceDataService);
    expect(service).toBeTruthy();
  });
});
