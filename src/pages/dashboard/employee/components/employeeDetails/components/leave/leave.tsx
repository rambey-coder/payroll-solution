import { SimpleGrid, Paper, Text } from "@mantine/core";
import {
  IconClock,
  IconLogin,
  IconLogout,
  IconCoffee,
} from "@tabler/icons-react";
import React from "react";
import { LeaveTable } from "../../../../../../../components/leaveTable";
import { DefaultTab } from "../../../../../../../components";

export const Leave = () => {
  const data = [
    {
      title: "Leave Taken",
      icon: IconClock,
      value: "13",
    },
    { title: "Pending Leave", icon: IconLogin, value: "3" },
    {
      title: "Total Leave", //all days of leave
      icon: IconLogout,
      value: "40",
    },
    {
      title: "Upcoming Leave", //days of leave left
      icon: IconCoffee,
      value: "188",
    },
  ];

  const tab = [
    { label: "Leave History", value: "leave_history", content: <LeaveTable /> },
    {
      label: "Leave Request",
      value: "leave_request",
      content: (
        <div>
          <h1>Requests</h1>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg p-5">
      <h3 className="text-2xl text-[#212529] mb-4 ">Leave Information</h3>

      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} className="my-8">
        {data.map((stat) => (
          <Paper withBorder p="md" radius="md" key={stat.title}>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#F6F4FF] p-2 rounded-full">
                <stat.icon className={"icon "} stroke={1.5} color="#9263f8" />
              </div>
              <Text className={"value text-[#212529]"}>{stat.value}</Text>
              <Text size="xs" c="dimmed" className={"title text-[#f8f9fa]"}>
                {stat.title}
              </Text>
            </div>
          </Paper>
        ))}
      </SimpleGrid>

      <div className="bg-slate-50 p-5 rounded-md shadow-sm">
        <DefaultTab defaultValue="leave_history" tabs={tab} />
      </div>
    </div>
  );
};
