import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// Models
import { IChipsListOption } from '../../../core/interfaces/chils-list.interfaces';
import { IconComponent } from '../../ui-blocks/icon/icon.component';

@Component({
  selector: 'app-chips-list',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './chips-list.component.html',
  styleUrl: './chips-list.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsListComponent),
      multi: true
    }
  ]
})
export class ChipsListComponent implements ControlValueAccessor {
  @Input() options: IChipsListOption[] = [];

  public value: string = '';
  public disabled: boolean = false;

  public onChange: (value: string) => void;
  public onTouched: () => void;

  writeValue(value: string | null): void {
    this.value = value || '';
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  changeValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
