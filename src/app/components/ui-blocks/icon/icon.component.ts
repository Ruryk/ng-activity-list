import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// Models
import { TIconNames } from '../../../core/types/icons.types';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() svgIcon: TIconNames;
}
