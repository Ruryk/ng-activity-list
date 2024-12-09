import { createFeature, createReducer, on } from '@ngrx/store';

// Actions
import * as NotesActions from './notes.actions';

// Models
import { INote } from '../../core/interfaces/notes.interfaces';

interface INotesState {
  notes: INote[],
}

const initialState: INotesState = {
  notes: [],
};

const reducer = createReducer(
  initialState,
  on(NotesActions.addNewNote, (state, { note }) => ({ ...state, notes: [...state.notes, note] })),
);

export const notesFeature = createFeature({
  name: 'notes',
  reducer
});
