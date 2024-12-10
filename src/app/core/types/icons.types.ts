import { EIconNames } from '../enums/icons.enums';

export type TIconNames = `${ typeof EIconNames[keyof typeof EIconNames] }`;
