import { TestBed } from '@angular/core/testing';

import { MarketItemPhotoService } from './market-item-photo.service';

describe('MarketItemPhotoService', () => {
  let service: MarketItemPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketItemPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
