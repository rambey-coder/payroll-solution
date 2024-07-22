import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";
import { AccessPosition, AccessPositionPostResponse, AccessResponse } from "./interface";

export const AccessApi = createApi({
  reducerPath: "AccessApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllAccess: builder.query<AccessResponse, void>({
      query: () => ({
        url: `/access`,
        method: "GET",
      }),
    }),
    addPositionAccess: builder.mutation<AccessPositionPostResponse, AccessPosition>({
        query: (body) => ({
          url: "/access",
          method: "POST",
          body,
        }),
      }),
  }),
});

export const { useGetAllAccessQuery, useAddPositionAccessMutation } = AccessApi;
