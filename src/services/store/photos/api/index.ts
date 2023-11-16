import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithHeaders } from '../../baseQueryWithHeaders.ts';
import { IPhoto } from '../../../../types/interfaces.ts';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: baseQueryWithHeaders,
  endpoints: (builder) => ({
    getAllPhotos: builder.query<IPhoto[], void>({
      query: () => ({
        url: 'photos',
      }),
    }),
  }),
});

export const { useGetAllPhotosQuery } = photoApi;
