import { createAction, createProcessAction } from '../../storage/utilities';
import type { State } from './types';

export const reduce = {
  buttons: createAction<State['buttons'], void>('[ACCOUNT][BUTTONS][REDUCE]'),
} as const;

export default reduce;