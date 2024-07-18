import React, { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useOutletContext } from "react-router-dom";
import { Paper, SimpleGrid, Text } from "@mantine/core";
import {
  IconUsersPlus,
  IconUserCheck,
  IconUserMinus,
  IconUserX,
  IconPlus,
} from "@tabler/icons-react";
import { ButtonWithIcon } from "../../../components";
import { EmployeeTable } from "./components/table/employeeTable";
import { AddEmployee } from "./components/addEmployee/addEmployee";
import { useGetAllEmployeeQuery } from "../../../store/employee";

export const Employee = () => {
  const [setPageName] = useOutletContext<any>();
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useGetAllEmployeeQuery();

  const statData = [
    {
      title: "Total Employee",
      icon: IconUsersPlus,
      value: data?.data?.length,
    },
    {
      title: "Present",
      icon: IconUserCheck,
      value: "0",
    },
    {
      title: "Absent",
      icon: IconUserMinus,
      value: "0",
    },
    {
      title: "Leave",
      icon: IconUserX,
      value: "0",
    },
  ];

  useEffect(() => {
    setPageName("Employee");
  }, []);

  return (
    <div>
      <AddEmployee opened={opened} close={close} />
      <div className="mb-8 flex justify-end">
        <ButtonWithIcon
          type="button"
          variant="outline"
          radius="md"
          name="Add Employee"
          color="#9263F8"
          leftSection={<IconPlus />}
          onClick={open}
        />
      </div>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
        {statData.map((stat) => (
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
        <EmployeeTable />
      </div>
    </div>
  );
};
