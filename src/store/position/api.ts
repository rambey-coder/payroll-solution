import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";
import {
  IPositionRes,
  PositionPayload,
} from "../../pages/dashboard/position/interface";

export const positionApi = createApi({
  reducerPath: "positionApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  endpoints: (builder) => ({
    addPosition: builder.mutation<IPositionRes, PositionPayload>({
      query: (body) => ({
        url: "/position",
        method: "POST",
        body,
      }),
    }),
    getAllPosition: builder.query<IPositionRes, void>({
      query: () => ({
        url: `/position`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddPositionMutation, useGetAllPositionQuery } = positionApi;
