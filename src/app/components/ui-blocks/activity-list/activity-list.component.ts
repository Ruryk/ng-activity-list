import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

// Store entities
import { notesFeature } from '../../../store/notes/notes.reducers';
import { deleteNote } from '../../../store/notes/notes.actions';

// Components
import { NotesFormComponent } from '../../form-fields/notes-form/notes-form.component';
import { NoteComponent } from '../note/note.component';
import { IconComponent } from '../icon/icon.component';

// Pipes
import { DaysDifferencePipe } from '../../../core/pipes/days-difference.pipe';
import { SortByTimestampPipe } from '../../../core/pipes/sort-by-timestamp.pipe';

// Models
import { INote } from '../../../core/interfaces/notes.interfaces';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [
    NotesFormComponent,
    AsyncPipe,
    NoteComponent,
    IconComponent,
    DaysDifferencePipe,
    SortByTimestampPipe,
  ],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityListComponent {
  private readonly store: Store = inject(Store);

  public notes$: Observable<INote[]> = this.store.select(notesFeature.selectNotes);
  public loading$: Observable<boolean> = this.store.select(notesFeature.selectLoading);

  public onDeleteNote(id: string) {
    this.store.dispatch(deleteNote(id));
  }
}
