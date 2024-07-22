import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";
import { DeductionResponse } from "./interface";

export const DeductionApi = createApi({
  reducerPath: "DeductionApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  endpoints: (builder) => ({
    addDeduction: builder.mutation<DeductionResponse, void>({
      query: (body) => ({
        url: "/deduction",
        method: "POST",
        body,
      }),
    }),
    getAllDeduction: builder.query<DeductionResponse[], void>({
      query: () => ({
        url: `/deduction`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddDeductionMutation, useGetAllDeductionQuery } = DeductionApi;
