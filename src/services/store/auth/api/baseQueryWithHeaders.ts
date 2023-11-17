import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VITE_CTP_API_URL } from '../../../../constant/metaData.ts';

export const baseQueryWithHeaders = fetchBaseQuery({
  baseUrl: VITE_CTP_API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('photos-token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
  credentials: 'include',
});
