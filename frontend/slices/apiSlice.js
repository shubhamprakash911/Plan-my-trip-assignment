import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/post",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
