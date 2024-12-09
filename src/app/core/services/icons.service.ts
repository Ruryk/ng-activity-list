import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// Configs
import { CSvgIcons } from '../constants/icons.constants';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  private iconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  public registryIcons(): void {
    this.registryIconsByConfigArray(CSvgIcons);
  }

  private registryIconsByConfigArray(configArray: Array<{ name: string; path: string; }>): void {
    configArray.forEach(({ name, path }) =>
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
