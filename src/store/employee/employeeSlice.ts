import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeList: [],
    employee: {},
  },
  reducers: {
    setEmployeeLists: (state, action) => {
      state.employeeList = action.payload;
    },

    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { setEmployee, setEmployeeLists } = employeeSlice.actions;
export default employeeSlice.reducer;
