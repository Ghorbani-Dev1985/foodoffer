import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/foodOffer.component';
import { config } from './app/foodOffer.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
