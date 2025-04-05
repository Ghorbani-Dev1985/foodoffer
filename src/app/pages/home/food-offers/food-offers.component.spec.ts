import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOffersComponent } from './food-offers.component';

describe('FoodOffersComponent', () => {
  let component: FoodOffersComponent;
  let fixture: ComponentFixture<FoodOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
