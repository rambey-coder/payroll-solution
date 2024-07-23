import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";
import { Tax, TaxResponse } from "./interface";

export const TaxApi = createApi({
  reducerPath: "TaxApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  endpoints: (builder) => ({
    addTax: builder.mutation<TaxResponse, Tax>({
      query: (body) => ({
        url: "/tax",
        method: "POST",
        body,
      }),
    }),
    getAllTax: builder.query<TaxResponse, void>({
      query: () => ({
        url: `/tax`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddTaxMutation, useGetAllTaxQuery } = TaxApi;
