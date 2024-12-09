// Services
import { IconsService } from '../services/icons.service';

/**
 * Initializes the application by performing various setup tasks.
 * This function returns a promise that resolves to a boolean value indicating whether the initialization was successful.
 *
 * @param iconsService - The IconsService instance used to manage SVG icons.
 // * @param store - The Store instance for managing application state.
 * @returns A function that returns a Promise<boolean>.
 */
export function initializeApplication(iconsService: IconsService): () => Promise<boolean> {
  return () => new Promise((resolve, reject) => {
    // Register SVG icons
    iconsService.registryIcons();

    resolve(true);
  });
}
