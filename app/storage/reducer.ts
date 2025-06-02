/* eslint-disable import/order */
import { reducer as form } from 'redux-form';
import { reducer as colors } from '../modules/colors';
import { reducer as account } from '../modules/account';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
  form,
  colors,
  account,
} as const;

export default combineReducers(reducers);