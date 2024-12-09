import { Component, forwardRef, Input } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    MatFormField,
    MatInput
  ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder = 'Type...';
  @Input() rows: number = 2;

  public value: string | null = '';
  public disabled: boolean = false;

  public onChange: (value: string) => void;
  public onTouched: () => void;

  writeValue(value: string | null): void {
    this.value = value;
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

  changeValue(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;

    this.onChange(value);
    this.onTouched();
  }
}
