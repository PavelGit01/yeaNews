import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "../types/types";

interface InitState {
  weatherLocation: string;
  historySearch: City[];
}

const initialState: InitState = {
  weatherLocation: "",
  historySearch: JSON.parse(localStorage.getItem("history") || "[]"),
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherLocation: (state: InitState, action: PayloadAction<string>) => {
      state.weatherLocation = action.payload;
    },
    addHistorySearch: (state: InitState, action: PayloadAction<City>) => {
      const { id, name } = action.payload;

      state.historySearch = state.historySearch.filter(
        (city) => city.id !== id
      );

      state.historySearch.unshift({ id, name });

      if (state.historySearch.length > 5) {
        state.historySearch.pop();
      }

      localStorage.setItem("history", JSON.stringify(state.historySearch));
    },
  },
});

export const { setWeatherLocation, addHistorySearch } = weatherSlice.actions;

export default weatherSlice.reducer;
