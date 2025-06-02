import { createReducer } from '../../storage/utilities';
import * as actions from './actions';
import type { State } from './types';

const initial = Object.seal<State>({
  buttons: {
    1: '#D199E7',
    2: '#D199E7',
    3: '#D199E7',
  },
});

export default createReducer(initial, builder => {
  builder.addCase(actions.reduce.buttons, (state, { payload }) => {
    return {
      ...state,
      buttons: { ...state.buttons, ...payload},
    };
  });
});