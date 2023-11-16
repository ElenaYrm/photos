import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authApi } from './auth/api';
import { authReducer } from './auth/slice';
import { authMiddleware } from './auth/middleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, authMiddleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;