import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY_CURRENCY, BASE_URL_CURRENCY } from "@/shared/config/api";
import { actualCurrencies } from "@/shared/config/const";
import { ICurrency } from "../model/types/types";

const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_CURRENCY }),
  endpoints: (build) => ({
    getCurrencyRates: build.query({
      query: (selectCurrency: ICurrency) => ({
        url: "",
        params: {
          base: selectCurrency,
          symbols: actualCurrencies.join(","),
        },
      }),
    }),
  }),
});

export const { useGetCurrencyRatesQuery } = currencyApi;

export default currencyApi;
