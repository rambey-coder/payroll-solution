import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "@mantine/core/styles.css";
import {
  Attendance,
  Dashboard,
  Designation,
  Employee,
  Leave,
  Payroll,
  RunPayroll,
  SignIn,
  SignUp,
} from "../pages";
import { Auth } from "./auth";
import { EmployeeDetails } from "../pages/dashboard/employee/components";
import Position from "../pages/dashboard/position/position";

export const MainRoute = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* protected route */}
        <Route path="/dashboard/*" element={<Auth />}>
          <Route path="overview" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="payroll/run-payroll" element={<RunPayroll />} />
          <Route path="employee" element={<Employee />} />
          <Route path="employee/:id" element={<EmployeeDetails />} />
          <Route path="leave" element={<Leave />} />
          <Route path="designation" element={<Designation />} />
          <Route path="position" element={<Position />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};
