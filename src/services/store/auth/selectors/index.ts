import { RootState } from '../../index.ts';

export const selectIsAuthorized = (state: RootState): boolean => state.auth.isAuthorized;
export const selectAuthError = (state: RootState): string => state.auth.error;
