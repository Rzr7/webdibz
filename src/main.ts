import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LandingModule } from './app/landing/landing.module';

if (environment.production) {
  enableProdMode();
}

/**
 * In production mode, the first page to open will be the landing module and its components
 * 
 * In Dev, the first component to load will always be the constructor.
 * We can later do routing or a dev button to quickly switch between the two
 */

// platformBrowserDynamic().bootstrapModule(environment.entryPoint == 'AppModule' ? AppModule : LandingModule)
platformBrowserDynamic().bootstrapModule(AppModule)

  .catch(err => console.error(err));
