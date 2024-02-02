// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Store + configuration
import { environment } from "@config";
import type { RootState } from "@store";
import { TAGS } from "./tags";

// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: environment.apiKey,
  prepareHeaders: (headers, { getState }) => {
    // If we have a token in the store, then use that for authenticated requests
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set("loginToken", token);
    }
    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
