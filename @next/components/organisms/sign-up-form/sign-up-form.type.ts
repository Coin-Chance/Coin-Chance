export interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  ReferredBy?: string;
  countryCode: string;
}
