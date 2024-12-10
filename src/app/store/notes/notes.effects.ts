import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

// Store entities
import {
  ENotesActionsType,
  addNewNoteSuccess,
  addNewNoteError,
  deleteNoteSuccess,
  deleteNoteError
} from './notes.actions';
import { notesFeature } from './notes.reducers';

// Models
import { INote, INoteMeta } from '../../core/interfaces/notes.interfaces';
import { EStorageKeys } from '../../core/enums/storage.enums';

// Utils
import { getRandomTimestamp } from '../../core/utils/time.utils';

@Injectable()
export class NotesEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly store: Store = inject(Store);

  addNewNote$ = createEffect(() => this.actions$.pipe(
    ofType(ENotesActionsType.AddNewNote),
    switchMap(({ noteMeta }: { noteMeta: INoteMeta }) => {
      /**Some request to server**/
      return of(noteMeta)
        .pipe(
          delay(1000),
          map((noteMeta) => {
            const uniqId = Math.random().toString(36).slice(2);
            const randomTimestamp = getRandomTimestamp();

            const note: INote = {
              ...noteMeta,
              user: 'Vlad Ivashchenko',
              id: uniqId,
              timestamp: randomTimestamp,
              icon: noteMeta.type
            };

            return addNewNoteSuccess(note);
          }),
          catchError((error) => of(addNewNoteError(error)))
        );
    })
  ));

  deleteNote$ = createEffect(() => this.actions$.pipe(
    ofType(ENotesActionsType.DeleteNote),
    switchMap(({ id }: { id: string }) => {
      /**Some request to server**/
      return of(id)
        .pipe(
          map((id) => deleteNoteSuccess(id)),
          catchError((error) => of(deleteNoteError(error)))
        );
    })
  ));

  saveStorage$ = createEffect(() => this.actions$.pipe(
    ofType(ENotesActionsType.AddNewNoteSuccess, ENotesActionsType.DeleteNoteSuccess),
    map(() => this.store.select(notesFeature.selectNotes)),
    switchMap(() => this.store.select(notesFeature.selectNotes).pipe(
      take(1),
      map((notes) => {
        localStorage.setItem(EStorageKeys.Notes, JSON.stringify(notes));
        return { type: 'NO_ACTION' };
      })
    ))
  ));
}
