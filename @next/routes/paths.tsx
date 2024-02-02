// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";
// MENTIONED ALL THE PATH IN APPLICATION
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  // root: ROOTS_AUTH,
};

export const PATH_PAGE = {};

export const GUEST_PATH = {
  root: ROOTS_DASHBOARD,
  signIn: "/sign-in",
  signUp: "/sign-up",
  forgotPassword: "/forgot-password",
  otpVerification: "/otp-verification",
  createPassword: "/create-new-password",
  referrals: "/referrals",
};
