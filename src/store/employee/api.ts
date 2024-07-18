import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import {
  IEmployeeRes,
  IEmployeePayLoad,
  IAllEmployeeRes,
} from "./interface";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    addEmployee: builder.mutation<IEmployeeRes, IEmployeePayLoad>({
      query: (body) => ({
        url: "/employee",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Employee"],
    }),
    getAllEmployee: builder.query<IAllEmployeeRes, void>({
      query: () => ({
        url: `/employee`,
        method: "GET",
      }),
    }),
    getEmployee: builder.query<IEmployeeRes, any>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddEmployeeMutation,
  useGetAllEmployeeQuery,
  useGetEmployeeQuery,
} = employeeApi;
