import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGroup } from '../../models';

import { TGroupMutation, TGroupsQuery } from './types';

const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Groups'],
  endpoints: (builder) => ({
    getGroups: builder.query<TGroup[], string | undefined>({
      query: (search) => `groups?q=${search}`,
      providesTags: ['Groups'],
    }),
    addGroup: builder.mutation<void, TGroupMutation>({
      query: (groupData) => ({
        url: 'groups',
        method: 'POST',
        body: groupData,
      }),
      invalidatesTags: ['Groups'],
    }),
    deleteGroup: builder.mutation<void, string>({
      query: (id) => ({
        url: `groups/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Groups'],
    }),
  }),
});

export const {
  useLazyGetGroupsQuery,
  useAddGroupMutation,
  useDeleteGroupMutation } = groupsApi;

export default groupsApi;
