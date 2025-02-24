import { BASE_JSON_URL } from "@/shared/config/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../model";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_JSON_URL }),
  endpoints: (build) => ({
    getUserInfo: build.query<IUser, number>({
      query: (id: number) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;

export default userApi;
