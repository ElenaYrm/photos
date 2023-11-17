import { RootState } from '../../index.ts';
import { IUserData } from '../../../../types/interfaces.ts';

export const selectIsAuthorized = (state: RootState): boolean => state.auth.isAuthorized;
export const selectAuthError = (state: RootState): string => state.auth.error;
export const selectUserInfo = (state: RootState): IUserData => state.auth.user;
