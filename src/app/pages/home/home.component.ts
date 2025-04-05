import { Component } from '@angular/core';


import { FoodCategoriesComponent } from "./food-categories/food-categories.component";
import { FoodOffersComponent } from './food-offers/food-offers.component';
import { SliderComponent } from "@components/slider/slider.component";

@Component({
  selector: 'foodOffer-home',
  imports: [FoodCategoriesComponent, FoodOffersComponent, SliderComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
