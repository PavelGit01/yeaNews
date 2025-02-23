import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, PostsApiResponse } from "../model/types";
import { BASE_JSON_URL } from "@/shared/config/api";

const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_JSON_URL }),
  endpoints: (build) => ({
    getNews: build.query<PostsApiResponse, { page: number }>({
      query: ({ page = 1 }) => ({
        url: "/posts",
        params: {
          _page: page,
          _limit: 10,
        },
      }),
      transformResponse: (response: unknown, meta) => {
        return {
          posts: response as IPost[],
          totalPosts: Number(meta?.response?.headers.get("x-total-count")) || 0,
        };
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

export default newsApi;
