import { ENDPOINTS } from "@config";
import { baseAPI } from "../base-api";

export const referralsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferrals: builder.query({
      query: () => ({
        url: ENDPOINTS.referrals,
        method: "GET",
      }),
      transformResponse: (res) => {
        const { data }: any = res;
        return data;
      },
    }),
    totalParticipants: builder.query({
      query: () => ({
        url: ENDPOINTS.totalParticipants,
        method: "GET",
      }),
      transformResponse: (res) => {
        const { data }: any = res;
        return data;
      },
    }),
  }),
});

export const { useGetReferralsQuery, useTotalParticipantsQuery } = referralsAPI;
