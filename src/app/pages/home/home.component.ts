import { Component } from '@angular/core';
import { SliderComponent } from "../../_common/components/slider/slider.component";
import { FoodCategoriesComponent } from "./food-categories/food-categories.component";

@Component({
  selector: 'foodOffer-home',
  imports: [SliderComponent, FoodCategoriesComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
