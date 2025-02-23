import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency, InitState } from "../types/types";
import { updateLocalStorage } from "../utils/utils";

const storedCurrencies = JSON.parse(localStorage.getItem("currencies") || "{}");

const initialState: InitState = {
  primaryCurrency: storedCurrencies.primaryCurrency || "USD",
  secondCurrency: storedCurrencies.secondCurrency || "EUR",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setPrimaryCurrency: (
      state: InitState,
      action: PayloadAction<ICurrency>
    ) => {
      state.primaryCurrency = action.payload;

      updateLocalStorage(state);
    },
    setSecondCurrency: (state: InitState, action: PayloadAction<ICurrency>) => {
      state.secondCurrency = action.payload;

      updateLocalStorage(state);
    },
    swapCurrencies: (state: InitState) => {
      [state.primaryCurrency, state.secondCurrency] = [
        state.secondCurrency,
        state.primaryCurrency,
      ];

      updateLocalStorage(state);
    },
  },
});

export const { setPrimaryCurrency, setSecondCurrency, swapCurrencies } =
  currencySlice.actions;

export default currencySlice.reducer;
