import { login, logout } from '../slice';
import { Action, Middleware } from '@reduxjs/toolkit';

export const storageMiddleware: Middleware = (_) => (next) => (action: Action<string>) => {
  if (login.match(action)) {
    localStorage.setItem('photos-token', action.payload);
  } else if (logout.match(action)) {
    localStorage.removeItem('photos-token');
  }
  return next(action);
};
