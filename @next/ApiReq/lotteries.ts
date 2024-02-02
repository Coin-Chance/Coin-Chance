import { AxiosResponse } from "axios";
import { requestUrl } from "@hooks";

export const getLottery = async (
  lottery: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(
    `/luckito/lottery/get-lottery?lotteryType=${lottery}`
  );
};

export const getPastResults = async (
  lottery: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(
    `/luckito/lottery/past-results?lotteryType=${lottery}&size=5&page=1`
  );
};

export const getAllRounds = async (
  lottery: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(
    `luckito/lottery/get-rounds?lotteryType=${lottery}&size=11`
  );
};

export const getExchangeQuote = async (
  sendAmount: string,
  sourceCoinSymbol: string,
  destinationCoinSymbol: string,
  transactionType: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/transaction/quote", {
    sourceAmount: parseFloat(sendAmount),
    sourceCoinSymbol,
    destinationCoinSymbol,
    transactionType,
  });
};

export const buyLotteryTickets = async (
  lotteryType: string,
  ticketType: string,
  roundNumber: any,
  numbers: any,
  coinSymbol: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/ticket/buy-ticket", {
    lotteryType,
    ticketType,
    roundNumber,
    numbers,
    coinSymbol,
  });
};

export const getLotteryQuotation = async (
  lotteryType: string,
  ticketType: string,
  roundNumber: any,
  numbers: any,
  coinSymbol: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/ticket/quote", {
    lotteryType,
    ticketType,
    roundNumber,
    numbers,
    coinSymbol,
  });
};

export const getPreviousPlays = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get(`luckito/user/get-tickets?page=1&size=100`);
};

export const getPendingPlays = async (
  lottery: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(
    `luckito/lottery/get-rounds-status?lotteryType=${lottery}&status=PENDING&size=10&page=1`
  );
};

export const getCurrentPlay = async (
  lottery: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(
    `luckito/lottery/get-rounds-status?lotteryType=${lottery}&status=PROGRESS`
  );
};

export const getRates = async (): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get("luckito/rate/get-rates");
};

export const createQuote = async (
  amount: string,
  coinSymbol: string,
  transactionType: string,
  token: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/quote/create-quote", {
    amount,
    coinSymbol,
    transactionType,

    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getWithdrawalTransactionQuote = async (
  sendAmount: string,
  selectedName: string,
  selectedAddress: string,
  transactionType: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/transaction/quote", {
    sourceAmount: +sendAmount,
    sourceCoinSymbol: selectedName,
    destinationCoinSymbol: selectedName,
    destinationAddress: selectedAddress,
    transactionType,
  });
};

export const withdrawTransaction = async (
  quoteId: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("luckito/transaction/create", {
    quoteId,
  });
};

export const pendingWithdrawalTransaction = async (): Promise<
  AxiosResponse<unknown, any>
> => {
  return await requestUrl.get(
    "luckito/transactions?status=PENDING&transationType=WITHDRAWAL&approval=PENDING"
  );
};

export const cancelWithdrawalTransaction = async ({
  transactionId,
}: {
  transactionId: string;
}): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(`luckito/transaction/cancel/${transactionId}`);
};
