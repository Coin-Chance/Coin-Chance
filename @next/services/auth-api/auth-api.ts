import { baseAPI } from "../base-api";
import { ENDPOINTS } from "@config";
import {
  IForgotPassword,
  ISetNewPassword,
  ISignIn,
  ISignUp,
  IVerifyEmail,
} from "./auth-api.types";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    otpVerification: builder.mutation({
      query: (body: IVerifyEmail) => ({
        url: ENDPOINTS?.verifyEmail,
        method: "POST",
        body: body,
      }),
    }),
    signIn: builder.mutation({
      query: (credentials: ISignIn) => ({
        url: ENDPOINTS?.signIn,
        method: "POST",
        body: credentials,
      }),
    }),
    verifyToken: builder.mutation({
      query: (token: string) => ({
        url: ENDPOINTS.verifyToken,
        method: "POST",
        headers: { forgetPasswordToken: token },
      }),
    }),
    authMe: builder.mutation({
      query: (body) => ({
        url: "auth/refresh-token",
        method: "PUT",
        body,
      }),
    }),
    signUp: builder.mutation({
      query: (body: ISignUp) => ({
        url: ENDPOINTS?.signUp,
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body: IForgotPassword) => ({
        url: ENDPOINTS?.forgotPassword,
        method: "POST",
        body,
      }),
    }),
    setNewPassword: builder.mutation({
      query: ({ body, token }: { body: ISetNewPassword; token: string }) => ({
        url: ENDPOINTS.setNewPassword,
        method: "POST",
        body,
        headers: {
          forgetPasswordToken: token,
        },
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/confirm-forgot-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useOtpVerificationMutation,
  useForgotPasswordMutation,
  useSetNewPasswordMutation,
  useResetPasswordMutation,
  useVerifyTokenMutation,
} = authAPI;
