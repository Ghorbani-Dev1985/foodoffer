import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'foodOffer-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './foodOffer.component.html',
})
export class AppComponent {
  title = 'foodOfferConfig';
}
