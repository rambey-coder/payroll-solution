import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { Group, rem } from "@mantine/core";
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
  IconChevronRight,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../../../../store/auth/authSlice";

interface Props {
  children: React.ReactNode;
  pageName: string;
}

interface LinkItem {
  link: string;
  label: string;
  icon?: React.ComponentType<any>;
}

interface GroupedLinkItem {
  label: string;
  icon: React.ComponentType<any>;
  links: LinkItem[];
  link: string;
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
    {
      link: "/dashboard/settings/profile",
      label: "Settings",
      icon: IconSettings,
      links: [
        { link: "/dashboard/settings/profile", label: "Profile" },
        { link: "/dashboard/settings/access", label: "Access" },
        { link: "/dashboard/settings/password", label: "Password" },
      ],
    },
  ];

  const navLinks = navigation.map((item, i) => {
    if ("links" in item && Array.isArray(item.links)) {
      return (
        <LinksGroup
          key={i}
          icon={item.icon}
          label={item.label}
          links={item.links.map((link) => ({
            label: link.label,
            link: link.link,
          }))}
          link={item.link}
        />
      );
    } else {
      return (
        <Link
          className={"link"}
          data-active={item.link === active || undefined}
          to={item.link}
          key={i}
          onClick={() => {
            setActive(item.link);
            sessionStorage.setItem("activePage", item.link);
          }}>
          <item.icon className={"linkIcon"} stroke={1.5} />
          <span>{item.label}</span>
        </Link>
      );
    }
  });

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

function LinksGroup({ icon: Icon, label, links, link }: GroupedLinkItem) {
  const [opened, setOpened] = useState(false);

  const toggleCollapse = () => {
    setOpened(!opened);
  };

  return (
    <>
      <Group>
        <Link to={link} className={"link"} onClick={toggleCollapse}>
          <Icon className={"linkIcon"} stroke={1.5} />
          <span>{label}</span>
        </Link>

        <IconChevronRight
          stroke={1.5}
          style={{
            width: rem(16),
            height: rem(16),
            transform: opened ? "rotate(-90deg)" : "none",
          }}
        />
      </Group>
      {opened && (
        <div className="linksContainer">
          {links.map((link, index) => (
            <Link
              className={"link ml-7"}
              key={index}
              to={link.link}
              onClick={() => {
                sessionStorage.setItem("activePage", link.label);
              }}>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
