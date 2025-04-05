import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsDirective } from '@directives/icons/icons.directive';

@Component({
  selector: 'foodOffer-mobile-navigation',
  imports: [CommonModule, IconsDirective ],
  standalone: true,
  templateUrl: './mobile-navigation.component.html'
})
export class MobileNavigationComponent {


}
