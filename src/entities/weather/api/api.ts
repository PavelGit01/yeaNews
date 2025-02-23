import { API_KEY_WEATHER, BASE_URL_WEATHER } from "@/shared/config/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_WEATHER }),
  endpoints: (build) => ({
    getWeather: build.query({
      query: (cityName) => ({
        url: "/",
        params: {
          q: cityName,
          appid: API_KEY_WEATHER,
          units: "metric",
        },
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;

export default weatherApi;
