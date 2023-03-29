import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { prepareHeaders } from 'utils/serviceUtils';

export const blackMarketApi = createApi({
  reducerPath: 'targetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    postSignUp: builder.mutation({
      query: (body) => ({ url: '/dj-rest-auth/login/', method: 'POST', body }),
    }),
    deleteLogOut: builder.mutation({
      query: (body) => ({ url: '/users/sign_out', method: 'DELETE', body }),
    }),
  }),
});

export const { usePostSignUpMutation, useDeleteLogOutMutation } = blackMarketApi;
