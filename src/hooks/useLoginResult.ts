import { useEffect } from 'react';
import { useAppDispatch } from '../services/store';
import { login, resetError } from '../services/store/auth/slice';
import { IAuthResponse } from '../types/interfaces.ts';

export const useLoginResult = (data: IAuthResponse | undefined, isSuccess: boolean): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(login(data));
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, []);
};
