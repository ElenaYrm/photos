import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice } from '../types';

const initialAuthSlice: IAuthSlice = {
  isAuthorized: !!localStorage.getItem('photos-token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthSlice,
  reducers: {
    login: (state, _: PayloadAction<string>): void => {
      state.isAuthorized = true;
    },
    logout: (state): void => {
      state.isAuthorized = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
