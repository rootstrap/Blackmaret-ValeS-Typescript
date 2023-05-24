import type { RootState } from '../store';

type ParamsType = string | number | boolean | null | undefined;

const isEmptyValue = (value: ParamsType) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return value === undefined || value === null || value === '';
};
// Removes any key which value is null, undefined or empty string
export const sanitizeParams = (paramsObj: { [key: string]: ParamsType }) =>
  Object.keys(paramsObj).reduce((acc, key: string) => {
    const paramValue = paramsObj[key as keyof typeof paramsObj];
    if (!isEmptyValue(paramValue)) return { ...acc, [key]: paramValue };
    return acc;
  }, {});

export const prepareHeaders = (headers: Headers, { getState }: { getState: () => unknown }) => {
  // By default, if we have a token in the store, let's use that for authenticated requests
  const { access_token: token } = (getState() as RootState).auth;
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
