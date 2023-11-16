import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQueryWithHeaders = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('photos-token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
