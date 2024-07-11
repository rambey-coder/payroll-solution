import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/components/sidebar/Sidebar";
import { SignIn } from "../pages/auth/signIn/signIn";

export const Auth = () => {
  const [pageName, setPageName] = React.useState("");

  const auth = sessionStorage.getItem("access_token");

  return auth ? (
    <Sidebar pageName={pageName}>
      <Outlet context={[setPageName]} />
    </Sidebar>
  ) : (
    <Navigate to="/" />
  );
};
