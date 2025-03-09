import { bootstrapApplication } from '@angular/platform-browser';
import { foodOfferConfig } from './app/foodOffer.config';
import { AppComponent } from './app/foodOffer.component';

bootstrapApplication(AppComponent, foodOfferConfig)
  .catch((err) => console.error(err));
