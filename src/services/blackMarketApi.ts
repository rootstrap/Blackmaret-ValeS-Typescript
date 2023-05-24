import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ProductType } from 'types/productTypes';
import { UserType } from 'types/userTypes';
import { sanitizeParams, prepareHeaders } from 'utils/serviceUtils';

export const blackMarketApi = createApi({
  reducerPath: 'blackMarketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({ url: '/dj-rest-auth/registration/', method: 'POST', body }),
    }),
    logIn: builder.mutation({
      query: (body) => ({ url: '/dj-rest-auth/login/', method: 'POST', body }),
      transformResponse: (response: UserType) => ({
        ...response,
        access_token: response.access_token,
        refresh_token: response.refresh_token,
      }),
    }),
    logOut: builder.mutation({
      query: (body) => ({ url: '/dj-rest-auth/logout/', method: 'POST', body }),
    }),
    getProducts: builder.query({
      query: ({ categories, page, page_size, search, state, unit_price_max, unit_price_min }) => {
        const params = {
          categories,
          page,
          page_size,
          search,
          state,
          unit_price_max,
          unit_price_min,
        };

        const sanitizedParams = sanitizeParams(params);
        const query = new URLSearchParams(sanitizedParams).toString();

        return { url: `/api/products/?${query}`, method: 'GET' };
      },
      transformResponse: (response: ProductType) => ({ ...response }),
    }),
  }),
});

export const { useCreateUserMutation, useLogOutMutation, useLogInMutation, useGetProductsQuery } =
  blackMarketApi;
