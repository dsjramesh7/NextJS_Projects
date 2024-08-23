import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactCardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000/" }),
  endpoints: (builder) => ({}),
});

export const {} = contactApi;
