import { createAction, createProcessAction } from '../../storage/utilities';
import type { State } from './types';

export const reduce = {
  profile: createAction<Pick<State, 'profile'>>('[ACCOUNT][PROFILE][REDUCE]'),
} as const;

export default reduce;