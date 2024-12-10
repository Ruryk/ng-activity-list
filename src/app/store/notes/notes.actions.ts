import { createAction } from '@ngrx/store';

// Models
import { INote, INoteMeta } from '../../core/interfaces/notes.interfaces';

export enum ENotesActionsType {
  AddNewNote = '[NOTES] Add new note',
  AddNewNoteSuccess = '[NOTES] Add new note success',
  AddNewNoteError = '[NOTES] Add new note error',
  DeleteNote = '[NOTES] Delete note',
  DeleteNoteSuccess = '[NOTES] Delete note success',
  DeleteNoteError = '[NOTES] Delete note error',
}

// Add note
export const addNewNote = createAction(
  ENotesActionsType.AddNewNote,
  (noteMeta: INoteMeta) => ({ noteMeta })
);

export const addNewNoteSuccess = createAction(
  ENotesActionsType.AddNewNoteSuccess,
  (note: INote) => ({ note })
);

export const addNewNoteError = createAction(
  ENotesActionsType.AddNewNoteError,
  (error: any) => ({ error })
);

// Delete note
export const deleteNote = createAction(
  ENotesActionsType.DeleteNote,
  (id: string) => ({ id })
);

export const deleteNoteSuccess = createAction(
  ENotesActionsType.DeleteNoteSuccess,
  (id: string) => ({ id })
);

export const deleteNoteError = createAction(
  ENotesActionsType.DeleteNoteError,
  (error: any) => ({ error })
);
