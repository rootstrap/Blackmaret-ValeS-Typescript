import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { prepareHeaders } from 'utils/serviceUtils';

export const blackMarketApi = createApi({
  reducerPath: 'blackMarketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    postRegistration: builder.mutation({
      query: (body) => ({ url: '/dj-rest-auth/registration/', method: 'POST', body }),
    }),
    deleteLogOut: builder.mutation({
      query: (body) => ({ url: '/dj-rest-auth/logout/', method: 'DELETE', body }),
    }),
  }),
});

export const { usePostRegistrationMutation, useDeleteLogOutMutation } = blackMarketApi;
