import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../store';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  userId: 0,
  isLoggedIn: false,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {resetToInitialState, logIn} = User.actions;

export default User.reducer;
