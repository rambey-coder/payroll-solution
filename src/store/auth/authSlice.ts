import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload.user;

      sessionStorage.setItem("access_token", action.payload.token);
      sessionStorage.setItem(
        "user_details",
        JSON.stringify(action.payload.user)
      );
    },
    clearUserDetails: (state) => {
      state.userDetails = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = authSlice.actions;
export default authSlice.reducer;
