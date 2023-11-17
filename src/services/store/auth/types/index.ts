import { IUserData } from '../../../../types/interfaces.ts';

export interface IAuthSlice {
  isAuthorized: boolean;
  error: string;
  user: IUserData;
}
