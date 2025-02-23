export type ICurrency = "USD" | "GBP" | "JPY" | "CAD" | "AUD" | "EUR";
export interface CurrencyResponse {
  base: ICurrency;
  rates: {
    [key in ICurrency]: number;
  };
}
export interface InitState {
  primaryCurrency: ICurrency;
  secondCurrency: ICurrency;
}
