import { createSelector } from 'reselect';
import type { Storage } from '../../storage';
import * as actions from './actions';

export default {
  getButtonColor: (id: number) => (state: Storage): string => state.colors.buttons[id],
};