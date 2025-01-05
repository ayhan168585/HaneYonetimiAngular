import { TestBed } from '@angular/core/testing';

import { FamilyPersonService } from './family-person.service';

describe('FamilyPersonService', () => {
  let service: FamilyPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
