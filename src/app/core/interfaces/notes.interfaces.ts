import { TNoteType } from '../types/notes.types';

export interface INote {
  id: number;
  note: string;
  timestamp: string | number;
  user: string;
  type: TNoteType;
}
