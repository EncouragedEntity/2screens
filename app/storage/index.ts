import { Action, configureStore, ThunkDispatch, Tuple } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    actionCreatorCheck: true,
    serializableCheck: false,
    immutableCheck: false,
    thunk: true as any,
  }),
  devTools: process.env.NODE_ENV === 'production' ? false : {
    name: require('../../package.json').name,
  },
});

export type Storage = ReturnType<typeof store.getState>;

export type Dispatch = ThunkDispatch<Storage, any, Action<string>>;

export { Provider } from 'react-redux';

export { store as default };