import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { Group } from "@mantine/core";
import {
  IconSettings,
  IconLogout,
  IconWallet,
  IconUserCheck,
  IconBriefcase,
  IconUsers,
  IconLayoutGrid,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../../../../store/auth/authSlice";

interface Props {
  children: React.ReactNode;
  pageName: string;
}

const Sidebar: React.FC<Props> = ({ children, pageName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(() => {
    return sessionStorage.getItem("activePage") || "/dashboard/overview";
  });

  const navigation = [
    { link: "/dashboard/overview", label: "Dashboard", icon: IconLayoutGrid },
    { link: "/dashboard/designation", label: "Designation", icon: IconBriefcase },
    { link: "/dashboard/employee", label: "Employee", icon: IconUsers },
    { link: "/dashboard/leave", label: "Leave", icon: IconCalendarEvent },
    { link: "/dashboard/attendance", label: "Attendance", icon: IconUserCheck },
    { link: "/dashboard/payroll", label: "Payroll", icon: IconWallet },
    { link: "/dashboard/settings", label: "Settings", icon: IconSettings },
  ];

  const navLinks = navigation.map((item, i) => (
    <Link
      className={"link"}
      data-active={item.label === active || undefined}
      to={item.link}
      key={i}
      onClick={() => {
        setActive(item.label);
        sessionStorage.setItem("activePage", item.label);
      }}>
      <item.icon className={"linkIcon"} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <div className="flex relative w-[100%] h-[100vh]">
      <nav className={"navbar bg-[#fff] overflow-y-hidden"}>
        <div className={"navbarMain"}>
          <Group className={"header"} justify="space-between">
            <Link to={""} className="text-gray-400">
              HCM Solution
            </Link>
          </Group>
          {navLinks}
        </div>

        <div className={"footer"}>
          <div
            className="link"
            onClick={() => {
              sessionStorage.clear();
              navigate("/");
              dispatch(clearUserDetails());
            }}>
            <IconLogout className={"linkIcon"} stroke={1.5} />
            <span>Logout</span>
          </div>
        </div>
      </nav>

      <section className="w-[100%] bg-[#f8f9fa] overflow-y-scroll">
        <div className="bg-white p-4 border-[#dee2e6] border-solid border-b">
          <h1 className="text-2xl font-bold text-[#212529]">{pageName}</h1>
        </div>

        <div className="p-[1rem] mt-8">{children}</div>
      </section>
    </div>
  );
};

export default Sidebar;
