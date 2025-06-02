import { createReducer } from '../../storage/utilities';
import * as actions from './actions';
import type { State } from './types';

const initial = Object.seal<State>({
  profile: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8901',
    bio: 'Mobile developer, React Native enthusiast, lifelong learner.',
  },
});

export default createReducer(initial, builder => {
  builder.addCase(actions.reduce.profile, (state, action) => {
   return { ...state.profile, ...action.payload };
  });
});