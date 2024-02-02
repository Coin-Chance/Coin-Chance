import type { PayloadAction } from "@reduxjs/toolkit";
import { setSessionStorage } from "@utils";
import { AuthState } from "./auth.type";

type LoginAction = PayloadAction<any>;

export const loginSuccess = (state: AuthState, action: LoginAction): void => {
  const { data } = action.payload;

  state.accessToken = data.token;
  state.refreshToken = data.refreshToken;
  state.user = {
    ...data,
  };
  state.isAuthenticated = true;

  setSessionStorage("accessToken", data.token);
  setSessionStorage("refreshToken", data.refreshToken);
};

export const authMeSuccess = (state: AuthState, action: LoginAction): void => {
  const { data } = action.payload;
  state.accessToken = data.authToken;
  state.refreshToken = data.refreshToken;
  state.isAuthenticated = true;

  setSessionStorage("accessToken", data.authToken);
  setSessionStorage("refreshToken", data.refreshToken);
};
