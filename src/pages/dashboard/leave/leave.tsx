import {
  IconClock,
  IconCoffee,
  IconLogin,
  IconLogout,
  IconPlus,
} from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ButtonWithIcon } from "../../../components";
import { SimpleGrid, Paper, Text } from "@mantine/core";
import { LeaveTable } from "../../../components/leaveTable";
import { LeaveRequest } from "./components/requestLeave/request";
import { useDisclosure } from "@mantine/hooks";

export const Leave = () => {
  const [setPageName] = useOutletContext<any>();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setPageName("Leave");
  }, []);

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
  return (
    <div>
      <LeaveRequest opened={opened} close={close} />
      <div className="mb-8 flex justify-end">
        <ButtonWithIcon
          type="button"
          variant="outline"
          radius="md"
          name="Request Leave"
          color="#9263F8"
          leftSection={<IconPlus />}
          onClick={open}
        />
      </div>

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

      <div className="bg-white p-4 rounded-lg mt-[3rem]">
        <LeaveTable />
      </div>
    </div>
  );
};
