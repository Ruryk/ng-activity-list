import { TNoteType } from '../types/notes.types';
import { TIconNames } from '../types/icons.types';

export interface IChipsListOption {
  value: TNoteType;
  icon: TIconNames;
  label: string;
}
