import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";
import {
  AddDesignationPayload,
  AddDesignationRes,
  IDesignation,
} from "./interface";

export const designationApi = createApi({
  reducerPath: "designationApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  endpoints: (builder) => ({
    addDesignation: builder.mutation<AddDesignationRes, AddDesignationPayload>({
      query: (body) => ({
        url: "/department",
        method: "POST",
        body,
      }),
    }),
    getAllDepartment: builder.query<IDesignation, void>({
      query: () => ({
        url: `/department`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddDesignationMutation, useGetAllDepartmentQuery } =
  designationApi;
