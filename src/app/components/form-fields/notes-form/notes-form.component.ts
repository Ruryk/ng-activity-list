import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

// Store entities
import { addNewNote } from '../../../store/notes/notes.actions';

// Components
import { ButtonComponent } from '../button/button.component';
import { ChipsListComponent } from '../chips-list/chips-list.component';
import { TextareaComponent } from '../textarea/textarea.component';

// Models
import { IChipsListOption } from '../../../core/interfaces/chils-list.interfaces';
import { INote } from '../../../core/interfaces/notes.interfaces';

// Configs
import { CNoteOptions } from '../../../core/constants/notes.constants';

@Component({
  selector: 'app-notes-form',
  standalone: true,
  imports: [
    ButtonComponent,
    ChipsListComponent,
    TextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss'
})
export class NotesFormComponent {
  private readonly store: Store = inject(Store);
  private readonly fb: FormBuilder = inject(FormBuilder);

  public readonly notesOptions: IChipsListOption[] = CNoteOptions;

  public formGroup: FormGroup = this.fb.group({
    note: ['', [Validators.required]],
    type: ['', [Validators.required]],
  });

  public createNote(): void {
    if (!this.formGroup.valid) return;

    const formValue = this.formGroup.value;
    const uniqId = Math.random().toString(36).slice(2);

    const note: INote = {
      ...formValue,
      user: 'Vlad Ivashchenko',
      id: uniqId,
      timestamp: new Date().getTime(),
    }

    this.store.dispatch(addNewNote(note));

    this.formGroup.reset();
  }
}
