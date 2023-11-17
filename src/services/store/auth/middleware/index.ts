import { login, logout } from '../slice';
import { Action, Middleware } from '@reduxjs/toolkit';
import { IAuthResponse } from '../../../../types/interfaces.ts';

export const storageMiddleware: Middleware = (_) => (next) => (action: Action<IAuthResponse>) => {
  if (login.match(action)) {
    localStorage.setItem('photos-token', action.payload.accessToken);
  } else if (logout.match(action)) {
    localStorage.removeItem('photos-token');
  }
  return next(action);
};
