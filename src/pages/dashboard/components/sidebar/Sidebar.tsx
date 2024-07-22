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
  IconUserCog,
  IconMoneybag,
  IconMathGreater,
  IconMathEqualLower,
  IconArrowBadgeRight,
  IconArrowBadgeDown,
  IconArrowRight,
  IconArrowDown,
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
    {
      link: "/dashboard/designation",
      label: "Designation",
      icon: IconBriefcase,
    },
    { link: "/dashboard/position", label: "Position", icon: IconUserCog },
    { link: "/dashboard/employee", label: "Employee", icon: IconUsers },
    { link: "/dashboard/leave", label: "Leave", icon: IconCalendarEvent },
    { link: "/dashboard/attendance", label: "Attendance", icon: IconUserCheck },
    { link: "/dashboard/payroll", label: "Payroll", icon: IconWallet },
    { label: "Settings", icon: IconSettings,
      children:[
        { link: "/dashboard/settings/access", label: "Access"}
      ]  
     },
  ];

  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((menu) => menu !== label)
        : [...prev, label]
    );
  };

  const handleNavClick = (label: string) => {
    setActive(label);
    sessionStorage.setItem("activePage", label);
  };

  const renderSubmenu = (children: any[]) => {
    return (
      <div className="ml-10">
        {children.map((child, i) => (
          <Link
            className="link"
            to={child.link}
            key={i}
            data-active={child.label === active || undefined}
            onClick={() => handleNavClick(child.label)}
          >
            <span>{child.label}</span>
          </Link>
        ))}
      </div>
    );
  };

  const navLinks = navigation.map((item, i) => (
   <div>
     <div
        className=" text-gray-800 flex items-center p-2 rounded-md cursor-pointer"
      >
     <Link
      className={"link"}
      data-active={item.label === active || undefined}
      to={item.link!}
      key={i}
      onClick={() => {
        setActive(item.label);
        sessionStorage.setItem("activePage", item.label);
          item.children ? toggleMenu(item.label) : handleNavClick(item.label)
      }}>
      <item.icon className={"linkIcon"} stroke={1.5} />
      <span>{item.label}</span>
      <span className="flex items-center"> {item.children && (
          <span className="ml-8 text-xs">
            {expandedMenus.includes(item.label) ? < IconArrowDown/> : <IconArrowRight/ >}
          </span>
        )}</span>
    </Link>
 
        </div>
    {item.children && expandedMenus.includes(item.label) && renderSubmenu(item.children)}
   </div>
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
