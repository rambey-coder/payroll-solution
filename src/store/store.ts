import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./auth";
import { employeeApi } from "./employee";
import authReducer from "./auth/authSlice";
import employeeReducer from "./employee/employeeSlice";
import { designationApi } from "./designation";
import designationReducer from "./designation/designationSlice";
import { positionApi } from "./position";
import { IncentiveApi } from "./incentive/api";
import { TaxApi as taxApi } from "./tax/api";
import { AccessApi } from "./access/api";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
    designation: designationReducer,
    [authApi.reducerPath]: authApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [designationApi.reducerPath]: designationApi.reducer,
    [positionApi.reducerPath]: positionApi.reducer,
    [IncentiveApi.reducerPath]: IncentiveApi.reducer,
    [AccessApi.reducerPath]: AccessApi.reducer,
    [taxApi.reducerPath]: taxApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      employeeApi.middleware,
      designationApi.middleware,
      positionApi.middleware,
      taxApi.middleware,
      IncentiveApi.middleware,
      AccessApi.middleware
    ),
});

setupListeners(store.dispatch);
export const dispatch = store.dispatch;
