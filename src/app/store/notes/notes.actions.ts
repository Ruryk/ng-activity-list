import { createAction } from '@ngrx/store';
import { INote } from '../../core/interfaces/notes.interfaces';

export enum ENotesActionsType {
  AddNewNote = '[NOTES] Add new note',
  AddNewNoteSuccess = '[NOTES] Add new note success',
  AddNewNoteError = '[NOTES] Add new note error',
}

// Load worker call history
export const addNewNote = createAction(
  ENotesActionsType.AddNewNote,
  (note: INote) => ({ note })
);

export const addNewNoteSuccess = createAction(
  ENotesActionsType.AddNewNoteSuccess,
  (note: INote) => ({ note })
);

export const addNewNoteError = createAction(
  ENotesActionsType.AddNewNoteError,
  (error: any) => ({ error })
);
