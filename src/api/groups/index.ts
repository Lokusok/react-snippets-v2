import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGroup, TSnippet } from '../../models';

import { TGroupMutation, TGroupsQuery } from './types';

const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Groups'],
  endpoints: (builder) => ({
    getGroups: builder.query<TGroup[], TGroupsQuery>({
      query: ({ query }) => `groups?q=${query}`,
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
    updateSnippets: builder.mutation<void, TGroup>({
      query: (group) => ({
        url: `groups/${group.id}`,
        method: 'PUT',
        body: group,
      }),
      invalidatesTags: ['Groups'],
    }),
    deleteSnippet: builder.mutation<void, TGroup>({
      query: (group) => ({
        url: `groups/${group.id}`,
        method: 'PUT',
        body: group,
      }),
      invalidatesTags: ['Groups']
    })
  }),
});

export const {
  useLazyGetGroupsQuery,
  useAddGroupMutation,
  useDeleteGroupMutation,
  useUpdateSnippetsMutation,
  useDeleteSnippetMutation } = groupsApi;

export default groupsApi;
