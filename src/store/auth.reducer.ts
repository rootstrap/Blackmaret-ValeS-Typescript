import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from 'types/userTypes';
import { RootState } from './index';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const initialState: UserType = {
  access_token: null,
  refresh_token: null,
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { access_token, refresh_token, user } }) => {
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.user = user;
    },
    revokeCredentials: (state) => {
      state.access_token = null;
      state.refresh_token = null;
      state.user = null;
    },
  },
});

export const selectCurrentUser = (state: RootState) => ({
  access_token: state.auth.access_token,
  user: state.auth.user,
});

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  return useMemo(() => user, [user]);
};

export const { setCredentials, revokeCredentials } = slice.actions;

export default slice.reducer;
