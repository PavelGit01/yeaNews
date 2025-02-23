import { currencyReducer } from "@/entities/currency/model";
import currencyApi from "@/entities/currency/api/api";
import newsApi from "@/entities/news/api/api";
import userApi from "@/entities/user/api/api";
import weatherApi from "@/entities/weather/api/api";
import { weatherReducer } from "@/entities/weather/module";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
