import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './foodOffer.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const foodOfferConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true },), provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withFetch()), providePrimeNG({
    theme: {
        preset: Aura
    }
}), provideRouter(routes), provideClientHydration(withEventReplay())]
};
