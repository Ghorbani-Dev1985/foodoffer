import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestaurantMenuItems } from '@constants/RestaurantMenuItems';
import { IRestaurantMenuItems } from '@models/restaurantMenuItems.model';


@Component({
  selector: 'foodOffer-desktop-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './desktop-navigation.component.html',
})
export class DesktopNavigationComponent{
    restaurantMenuItems = signal<IRestaurantMenuItems[]>(RestaurantMenuItems);
    isShowSearchBox = input.required<boolean>();
    constructor() {
    }

}
