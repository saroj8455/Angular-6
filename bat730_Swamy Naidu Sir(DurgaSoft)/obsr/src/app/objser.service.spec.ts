import { TestBed } from '@angular/core/testing';

import { ObjserService } from './objser.service';

describe('ObjserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjserService = TestBed.get(ObjserService);
    expect(service).toBeTruthy();
  });
});
