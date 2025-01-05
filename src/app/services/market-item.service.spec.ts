import { TestBed } from '@angular/core/testing';

import { MarketItemService } from './market-item.service';

describe('MarketItemService', () => {
  let service: MarketItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
