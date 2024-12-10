import { IChipsListOption } from '../interfaces/chils-list.interfaces';
import { TNoteType } from '../types/notes.types';

export const CNoteOptions: IChipsListOption[] = [
  {
    value: 'message',
    label: 'Message',
    icon: 'message',
  },
  {
    value: 'phone',
    label: 'Phone',
    icon: 'phone',
  },
  {
    value: 'coffee',
    label: 'Coffee',
    icon: 'coffee',
  },
  {
    value: 'beer',
    label: 'Beer',
    icon: 'beer',
  },
  {
    value: 'meeting-note',
    label: 'Meeting note',
    icon: 'meeting-note',
  }
];

export const CActionsText: {[key in TNoteType]: string} = {
  message: 'had a meeting with',
  phone: 'had a meeting with',
  coffee: 'had a coffee with',
  beer: 'had a beer with',
  'meeting-note': 'added a note to',
}
