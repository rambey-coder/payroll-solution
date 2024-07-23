import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";
import { Incentive, IncentiveResponse } from "./interface";

export const IncentiveApi = createApi({
  reducerPath: "IncentiveApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  endpoints: (builder) => ({
    addIncentive: builder.mutation<IncentiveResponse, Incentive>({
      query: (body) => ({
        url: "/incentive",
        method: "POST",
        body,
      }),
    }),
    getAllIncentive: builder.query<IncentiveResponse, void>({
      query: () => ({
        url: `/incentive`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddIncentiveMutation, useGetAllIncentiveQuery } = IncentiveApi;
