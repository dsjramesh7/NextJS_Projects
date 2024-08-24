import { contactData } from "@/components/contact/addNewContact/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactCardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getCards: builder.query<contactData[], void>({
      query: () => `api/cards`,
    }),
    postCard: builder.mutation<contactData, contactData>({
      query: (data) => ({ url: "api/card", method: "POST", body: data }),
    }),
    editCard: builder.mutation<contactData, contactData>({
      query: ({ id, ...body }) => ({
        url: `api/card?id=${id}`,
        method: "PUT",
        body: { ...body },
      }),
    }),
    deleteCard: builder.mutation<
      contactData,
      {
        id?: string;
      }
    >({
      query: ({ id }) => ({
        url: `api/card?id=${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCardsQuery,
  usePostCardMutation,
  useEditCardMutation,
  useDeleteCardMutation,
} = contactApi;
