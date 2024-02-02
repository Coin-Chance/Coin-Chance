export interface ISignUp {
  email: string;
  password: string;
  role: string;
  countryCode: string;
  ReferredBy?: string | null;
}
export interface IVerifyEmail {
  email: string;
  code: string;
}
export interface ISignIn {
  email: string;
  password: string;
}
export interface IForgotPassword {
  email: string;
}

export interface ISetNewPassword {
  Password: string;
  ConfirmPassword: string;
}
