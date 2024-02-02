export type TAuthSlice = {
  authToken: string | null;
  refreshToken: string | null;
  userInfo: string | null;
  isLoggedIn: boolean;
  userAccounts: string | null;
  quoteId: string | null;
  hideBalances: boolean;
  isSuspended: "ENABLED";
  unreadMessages: [];
  read: number;
  notifications: number;
};
export type TRestaruantSlice = {
  restaurantId: string | null;
};
