import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'foodOffer-root',
  imports: [RouterOutlet],
  templateUrl: './foodOffer.component.html',
})
export class AppComponent {
  title = 'foodOfferConfig';
}
