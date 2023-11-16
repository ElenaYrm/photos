import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithHeaders } from '../../baseQueryWithHeaders.ts';
import { IComment, INewComment } from '../../../../types/interfaces.ts';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  tagTypes: ['Comments'],
  baseQuery: baseQueryWithHeaders,
  endpoints: (builder) => ({
    getAllCommentsToPhoto: builder.query<IComment[], number>({
      query: (photoId) => ({
        url: 'comments',
        params: {
          photo: photoId,
        },
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Comments' as const, id })), { type: 'Comments', id: 'LIST' }]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    addComments: builder.mutation<IComment, INewComment>({
      query: (body) => ({
        url: 'comments',
        method: 'post',
        body,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
    deleteComment: builder.mutation<string, number>({
      query: (commentId) => ({
        url: `comments/${commentId}`,
        method: 'delete',
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllCommentsToPhotoQuery, useAddCommentsMutation, useDeleteCommentMutation } = commentsApi;
