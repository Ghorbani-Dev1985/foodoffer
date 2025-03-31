import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionTitleComponent } from "@components/section-title/section-title.component";
import { CategoryItems } from '@constants/CategoryItems';

@Component({
  selector: 'foodOffer-food-categories',
  imports: [SectionTitleComponent, RouterModule],
  templateUrl: './food-categories.component.html'
})
export class FoodCategoriesComponent {
    categoryItems = signal(CategoryItems)
}
