import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestaurantMenuItems } from '@constants/RestaurantMenuItems';
import { IRestaurantMenuItems } from '@models/restaurantMenuItems.model';

import { ToggleSearchBoxService } from '@services/toggle-search-box.service/toggle-search-box.service';

@Component({
  selector: 'foodOffer-desktop-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './desktop-navigation.component.html',
})
export class DesktopNavigationComponent{
    showSearchBox: ToggleSearchBoxService = inject(ToggleSearchBoxService)
    restaurantMenuItems = signal<IRestaurantMenuItems[]>(RestaurantMenuItems);
    constructor() {
    }

}
