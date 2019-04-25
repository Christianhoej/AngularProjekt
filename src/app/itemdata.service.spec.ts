import { TestBed } from '@angular/core/testing';

import { ItemdataService } from './itemdata.service';

describe('ItemdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemdataService = TestBed.get(ItemdataService);
    expect(service).toBeTruthy();
  });
});
