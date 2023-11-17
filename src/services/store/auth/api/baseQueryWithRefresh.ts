import { baseQueryWithHeaders } from './baseQueryWithHeaders.ts';
import { login, logout } from '../slice';
import { IAuthResponse } from '../../../../types/interfaces.ts';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { VITE_CTP_API_URL } from '../../../../constant/metaData.ts';

export const baseQueryWithRefresh: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const prevArgs = args;
  let result = await baseQueryWithHeaders(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQueryWithHeaders(`${VITE_CTP_API_URL}auth/refresh`, api, extraOptions);

    if (refreshResult.data) {
      api.dispatch(login(refreshResult.data as IAuthResponse));
      result = await baseQueryWithHeaders(prevArgs, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};
