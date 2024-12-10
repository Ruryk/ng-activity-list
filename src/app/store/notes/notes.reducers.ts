import { createFeature, createReducer, on } from '@ngrx/store';

// Actions
import * as NotesActions from './notes.actions';

// Models
import { INote } from '../../core/interfaces/notes.interfaces';
import { EStorageKeys } from '../../core/enums/storage.enums';

interface INotesState {
  notes: INote[],
  loading: boolean,
  error: boolean,
}

const notesFromStorage = localStorage.getItem(EStorageKeys.Notes);
const parsedNotes = notesFromStorage && notesFromStorage !== 'undefined' ? JSON.parse(notesFromStorage) : [];

const initialState: INotesState = {
  notes: parsedNotes,
  loading: false,
  error: false,
};

const reducer = createReducer(
  initialState,
  on(NotesActions.addNewNote, (state) => ({ ...state, loading: true, error: false })),
  on(NotesActions.addNewNoteSuccess, (state, { note }) => ({
    ...state,
    notes: [...state.notes, note],
    loading: false,
    error: false
  })),
  on(NotesActions.addNewNoteError, (state) => ({ ...state, loading: false, error: true })),
  on(NotesActions.deleteNoteSuccess, (state, { id }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== id),
    loading: false,
    error: false
  })),
  on(NotesActions.deleteNoteError, (state) => ({ ...state, loading: false, error: true })),
);

export const notesFeature = createFeature({
  name: 'notes',
  reducer
});
