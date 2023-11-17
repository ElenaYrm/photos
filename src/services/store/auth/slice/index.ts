import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSlice } from '../types';
import { IAuthResponse, IUserData } from '../../../../types/interfaces.ts';

const initialUser: IUserData = {
  id: 0,
  username: '',
  email: '',
};

const initialAuthSlice: IAuthSlice = {
  isAuthorized: !!localStorage.getItem('photos-token'),
  error: '',
  user: initialUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthSlice,
  reducers: {
    login: (state, action: PayloadAction<IAuthResponse>): void => {
      state.isAuthorized = true;
      state.user = action.payload.user;
    },
    logout: (state): void => {
      state.isAuthorized = false;
      state.user = initialUser;
    },
    setError: (state, action: PayloadAction<string>): void => {
      state.error = action.payload;
    },
    resetError: (state): void => {
      state.error = '';
    },
  },
});

export const authReducer = authSlice.reducer;
export const { login, logout, setError, resetError } = authSlice.actions;
