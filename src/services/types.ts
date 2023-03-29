export type UserType = {
  access_token: string | null;
  refresh_token: string | null;
  user: {
    pk: number;
    email: string;
    first_name: string;
    last_name: string;
  } | null;
};
