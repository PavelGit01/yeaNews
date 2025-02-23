import { InitState } from "../types/types";

export const updateLocalStorage = (state: InitState) => {
  localStorage.setItem(
    "currencies",
    JSON.stringify({
      primaryCurrency: state.primaryCurrency,
      secondCurrency: state.secondCurrency,
    })
  );
};
