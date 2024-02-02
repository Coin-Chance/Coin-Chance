import { requestUrl } from "@hooks";
import { AxiosResponse } from "axios";

export const emailAuthentication = async (
  email: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/email/email-auth", {
    email,
  });
};

export const verifyEmailAuthentication = async (
  email: string,
  otpFieldValue: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/email/email-verify", {
    email,
    code: otpFieldValue,
  });
};

export const userSignup = async (
  pass: string,
  emailId: string,
  userName: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/signup", {
    password: pass,
    emailId,
    role: "USER",
    countryCode: "KR",
    userName,
  });
};

export const userSignin = async (
  pass: string,
  userName: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/signin", {
    password: pass,
    userName,
  });
};

export const addUserWallets = async (
  walletAddresses: any
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post(
    "luckito/user/add-user-wallets",
    walletAddresses
  );
};

export const getWithdrawalAddresses = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get("luckito/user/wallet");
};

export const getUserAcccounts = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get("luckito/user/get-accounts");
};

export const findUserId = async (
  email: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/find-id", {
    email,
  });
};

export const findUserPassword = async (
  userName: string,
  email: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/find-password", {
    userName,
    email,
  });
};

export const changeEmail = async (
  email: string,
  token: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/change-email", {
    email,
    token,
  });
};

export const verifyChangeEmail = async (
  code: string,
  email: string,
  token: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/email/verify-change-email", {
    code,
    email,
    token,
  });
};

export const changePassword = async (
  password: string,
  newPassword: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/change-password", {
    password,
    newPassword,
  });
};

export const deleteUserAccount = async (
  passCode: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/delete-account", {
    passCode,
  });
};

export const sendAmount = async (
  email: string,
  coinSymbol: string,
  amount: number
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/account/send", {
    email,
    coinSymbol,
    amount,
    // headers: { Authorization: `Bearer ${token}` },
  });
};

export const getCheckUserName = async (
  userName: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(
    `luckito/user/signup/check-username?userName=${userName}`
  );
};

export const postHelp = async (
  email: string,
  message: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/support/contact-support", {
    email,
    message,
  });
};

export const getUserWallets = async (
  email: string,
  message: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/support/contact-support", {
    email,
    message,
  });
};

export const getUserNotifications = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get("luckito/user/notifications");
};

export const readUserNotifications = async (
  notificationIds: string[] | []
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/read-notifications", {
    notificationIds,
  });
};

export const getUserMessages = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get("luckito/user/announcements");
};

export const readAnnouncements = async (
  announcementIds: any
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/read-announcements", {
    announcementIds,
  });
};

export const postponeAnnouncements = async (
  announcementIds: any
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/user/postpone-announcements", {
    announcementIds,
  });
};

export const getWithdrawalFee = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get("luckito/user/conf");
};

export const userDetails = async (): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get("luckito/user/me");
};
