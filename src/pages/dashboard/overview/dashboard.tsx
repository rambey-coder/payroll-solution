import React, { useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BaseDir } from "../../../baseDir";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton } from "../../../components/button/button";
import {
  IconUsers,
  IconUserEdit,
  IconCalendarDollar,
  IconCircleDot,
  IconFileText,
  IconClock,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";
import { RecentPayrollHistory, WorkHourStat } from "./components";

export const Dashboard = () => {
  const [setPageName] = useOutletContext<any>();

  const user = JSON.parse(sessionStorage.getItem("user_details") || "{}");

  const quickActionList = [
    {
      title: "Manage Employee",
      link: "/dashboard/employee",
      icon: IconUsers,
    },
    {
      title: "Update Profile",
      link: " /dashboard/settings",
      icon: IconUserEdit,
    },
    {
      title: "Create Payroll",
      link: "/dashboard/payroll",
      icon: IconCalendarDollar,
    },
    {
      title: "View Request",
      link: "",
      icon: IconFileText,
    },
  ];

  const icons = {
    leave: IconFileText,
    hours: IconClock,
    employee: IconUsers,
    coin: IconCoin,
  };

  const data = [
    { title: "Total Employees", icon: "employee", value: "13,456", diff: 34 },
    { title: "Total Salary", icon: "coin", value: "4,145", diff: -13 },
    { title: "Total Hours", icon: "hours", value: "745", diff: 18 },
    { title: "Total Leave Requests", icon: "leave", value: "188", diff: -30 },
  ] as const;

  useEffect(() => {
    setPageName("Dashboard");
  }, []);

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={"title"}>
            {stat.title}
          </Text>
          <Icon className={"icon"} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={"value"}>{stat.value}</Text>
          <Text
            c={stat.diff > 0 ? "teal" : "red"}
            fz="sm"
            fw={500}
            className={"diff"}>
            <span>{stat.diff}%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });

  return (
    <div>
      {/* header */}
      <div className="flex align-baseline gap-8">
        <div className="bg-[#271E3B] p-6 rounded-lg w-[100%] flex items-center justify-between ">
          <div>
            <h1 className="text-white text-2xl font-bold">
              Good to see you, {user?.first_name} 👋
            </h1>
            <p className="text-white my-4">How are you doing today?</p>

            <PrimaryButton
              variant="outline"
              color="#fff"
              name="Go to profile"
              radius="xl"
              type="button"
            />
          </div>

          <div className="w-[200px]">
            <img src={`${BaseDir.IMAGE_DIR}/image.png`} alt="" width={"100%"} />
          </div>
        </div>

        <WorkHourStat />
      </div>

      {/* header end */}

      {/* quick actions */}

      <div className="my-8">
        <div className="flex items-center gap-1">
          <IconCircleDot stroke={1.5} className="quick-action" />
          <h1 className="text-xl font-medium text-[#495057]">Quick Actions</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {quickActionList.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="bg-[#e9ecef] p-4 rounded-lg flex items-center justify-center space-x-4 quick-links">
              <item.icon stroke={1.5} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* quick actions end */}

      {/* cards */}
      <div className={"root"}>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
      </div>
      {/* cards end */}

      {/* recent payroll */}
      <div className="bg-white p-4 rounded-lg">
        <RecentPayrollHistory />
      </div>
      {/* recent payroll end */}
    </div>
  );
};
