import { TNoteType } from '../types/notes.types';
import { TIconNames } from '../types/icons.types';

export interface INote {
  id: string;
  note: string;
  timestamp: string | number;
  user: string;
  type: TNoteType;
  icon: TIconNames;
}

export interface INoteMeta {
  note: string;
  type: TNoteType;
}
