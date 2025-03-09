import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './foodOffer.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const foodOfferConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true },), provideRouter(routes), providePrimeNG({
    theme: {
        preset: Aura
    }
}), provideRouter(routes), provideClientHydration(withEventReplay())]
};
