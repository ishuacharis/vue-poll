import { LOGIN, LOGOUT, PROFILE } from "./action_types";

export const auth =  (credentials) => ({
  type: LOGIN,
  credentials: credentials,
});

export const unauth = (credentials) => ({
  type: LOGOUT,
  credentials: credentials,
});

export const profile = (credentials) => ({
  type: PROFILE,
  credentials,
});