import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthResponse, ILoginForm, ISignupForm } from '../../../../types/interfaces.ts';
import { VITE_CTP_API_URL } from '../../../../constant/metaData.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_CTP_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<IAuthResponse, ISignupForm>({
      query: (body: ISignupForm) => {
        return {
          url: 'auth/signup',
          method: 'post',
          body,
        };
      },
    }),
    login: builder.mutation<IAuthResponse, ILoginForm>({
      query: (body: ISignupForm) => {
        return {
          url: 'auth/login',
          method: 'post',
          body,
        };
      },
    }),
    logout: builder.mutation<string, void>({
      query: () => {
        return {
          url: 'auth/logout',
          method: 'post',
        };
      },
    }),
    refresh: builder.query<IAuthResponse, void>({
      query: () => {
        return {
          url: 'auth/refresh',
          method: 'get',
        };
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation, useLazyRefreshQuery } = authApi;
