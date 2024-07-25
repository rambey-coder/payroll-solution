import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import {
  AllUserResponse,
  IUser,
  LoginPayload,
  LoginResponse,
  ProfileRes,
  SignUpPayload,
  SignUpResponse,
} from "./interface";
import { axiosBaseQuery } from "../../utils/axiosQuery/axiosBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    signUp: builder.mutation<SignUpResponse, SignUpPayload>({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    getProfile: builder.query<ProfileRes, void>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    getAllUser: builder.query<AllUserResponse, void>({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
    }),
    uploadProfilePicture: builder.mutation<LoginResponse, LoginPayload>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useGetProfileQuery,
  useGetAllUserQuery,
} = authApi;
