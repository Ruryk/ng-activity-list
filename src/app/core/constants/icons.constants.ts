import { EIconNames } from '../enums/icons.enums';

export const CSvgIcons = Object.values(EIconNames).map(name => ({
  name, path: `/assets/icons/${ name }.svg`
}));
