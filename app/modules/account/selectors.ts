import { createSelector } from 'reselect';
import type { Storage } from '../../storage';
import * as actions from './actions';

export default {
  getProfile: (state: Storage) => state.account.profile,
};