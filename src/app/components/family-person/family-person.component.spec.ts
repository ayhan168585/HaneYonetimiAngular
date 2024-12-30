import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPersonComponent } from './family-person.component';

describe('FamilyPersonComponent', () => {
  let component: FamilyPersonComponent;
  let fixture: ComponentFixture<FamilyPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
