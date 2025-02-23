import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import newsApi from "@/entities/news/api/api";
import weatherApi from "@/entities/weather/api/api";
import userApi from "@/entities/user/api/api";
import currencyApi from "@/entities/currency/api/api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(newsApi.middleware)
      .concat(weatherApi.middleware)
      .concat(userApi.middleware)
      .concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
