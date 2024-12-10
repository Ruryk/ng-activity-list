import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// Routes
import { routes } from './app.routes';

// Store
import { notesFeature } from './store/notes/notes.reducers';
import { NotesEffects } from './store/notes/notes.effects';

// Initializers
import { initializeApplication } from './core/initializers/app.initializer';

// Services
import { IconsService } from './core/services/icons.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {
        provide: APP_INITIALIZER,
        useFactory: initializeApplication,
        deps: [IconsService],
        multi: true,
    },
    provideStore(),
    provideState(notesFeature),
    provideEffects(NotesEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
