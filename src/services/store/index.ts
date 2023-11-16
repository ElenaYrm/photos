import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authApi } from './auth/api';
import { authReducer } from './auth/slice';
import { storageMiddleware } from './auth/middleware';
import { photoApi } from './photos/api';
import { commentsApi } from './comments/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, storageMiddleware, photoApi.middleware, commentsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
