import { createApi } from '@reduxjs/toolkit/query/react';
import { IPhoto } from '../../../../types/interfaces.ts';
import { baseQueryWithRefresh } from '../../auth/api/baseQueryWithRefresh.ts';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: baseQueryWithRefresh,
  endpoints: (builder) => ({
    getAllPhotos: builder.query<IPhoto[], void>({
      query: () => ({
        url: 'photos',
      }),
    }),
  }),
});

export const { useGetAllPhotosQuery } = photoApi;
