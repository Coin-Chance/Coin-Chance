import { createSlice } from "@reduxjs/toolkit";
import { loginSuccess, authMeSuccess } from "./extra-reducers";
import { authAPI } from "@services";
import { AuthState } from "./auth.type";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: {
    company: {
      menuPermissions: []
    },
    userPermissions: {}
  },
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authAPI.endpoints.signIn.matchFulfilled, loginSuccess);
    builder.addMatcher(authAPI.endpoints.authMe.matchFulfilled, authMeSuccess);
  },
});

export const authActions = slice.actions;
export const authReducer = slice.reducer;
