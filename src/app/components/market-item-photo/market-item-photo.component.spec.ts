import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketItemPhotoComponent } from './market-item-photo.component';

describe('MarketItemPhotoComponent', () => {
  let component: MarketItemPhotoComponent;
  let fixture: ComponentFixture<MarketItemPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketItemPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketItemPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
