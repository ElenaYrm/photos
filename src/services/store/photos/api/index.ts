import { createApi } from '@reduxjs/toolkit/query/react';
import { IPhotosResponse } from '../types';
import { baseQueryWithHeaders } from '../../baseQueryWithHeaders.ts';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: baseQueryWithHeaders,
  endpoints: (builder) => ({
    getAllPhotos: builder.query<IPhotosResponse, void>({
      query: () => ({
        url: 'photos',
      }),
    }),
  }),
});

export const { useGetAllPhotosQuery } = photoApi;
