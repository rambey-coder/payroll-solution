import React, { useEffect, useState } from "react";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { NameProfile } from "../../../../../../components/nameProfile";
import { useParams } from "react-router-dom";
import {
  IconChartLine,
  IconDatabase,
  IconHierarchy2,
} from "@tabler/icons-react";
import { useGetEmployeeQuery } from "../../../../../../store/employee";
import { useDispatch } from "react-redux";
import { setEmployee } from "../../../../../../store/employee/employeeSlice";

export const EmployeeStat = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetEmployeeQuery(id);

  const employeeDetails = data?.data;

  useEffect(() => {
    dispatch(setEmployee({ employeeDetails }));
  }, [data]);

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      <Paper bg={"#fefae0"} radius="md" p="md">
        <Group>
          <NameProfile
            name={`${employeeDetails?.first_name} ${employeeDetails?.last_name}`}
          />

          <div>
            <Text fw={700} size="xl" className="capitalize">
              {`${employeeDetails?.first_name} ${employeeDetails?.last_name}`}
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.role}
            </Text>
          </div>
        </Group>
      </Paper>
      <Paper bg={"#00b4d8"} radius="md" p="md">
        <Group>
          <div
            style={{
              backgroundColor: "#caf0f8",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <IconDatabase className={"icon "} stroke={1.5} color="#03045e" />
          </div>

          <div>
            <Text fw={700} size="xl">
              Employee ID
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.id}
            </Text>
          </div>
        </Group>
      </Paper>
      <Paper bg={"#84a98c"} radius="md" p="md">
        <Group>
          <div
            style={{
              backgroundColor: "#cad2c5",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <IconChartLine className={"icon "} stroke={1.5} color="#354f52" />
          </div>

          <div>
            <Text fw={700} size="xl">
              Status
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.active ? "Active" : "Disabled"}
            </Text>
          </div>
        </Group>
      </Paper>
      <Paper bg={"#415a77"} radius="md" p="xs">
        <Group>
          <div
            style={{
              backgroundColor: "#778da9",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <IconHierarchy2 className={"icon "} stroke={1.5} color="#1b263b" />
          </div>

          <div>
            <Text fw={700} size="xl">
              Position
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.position.title}
            </Text>
          </div>
        </Group>
      </Paper>
    </SimpleGrid>
  );
};
