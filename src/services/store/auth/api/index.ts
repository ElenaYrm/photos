import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthResponse, ILoginForm, ISignupForm } from '../../../../types/interfaces.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
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
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } = authApi;
