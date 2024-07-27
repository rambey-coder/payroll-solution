import { SimpleGrid, Paper, Text } from "@mantine/core";
import {
  IconFileText,
  IconChecklist,
  IconLoader,
  IconAlertCircle,
} from "@tabler/icons-react";
import React from "react";
import { PrimaryButton } from "../../../../../components";
import { PayrollTable } from "../table";
import { useNavigate } from "react-router-dom";

export const PayrollList = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Total Payment", //total payment
      icon: IconFileText,
      value: "₦13,456",
    },
    { title: "Completed", icon: IconChecklist, value: "$4,145", diff: -13 },
    {
      title: "Pending", //total deduction
      icon: IconLoader,
      value: "₦7,745",
    },
    {
      title: "Overdue",
      icon: IconAlertCircle,
      value: "₦2,188",
    },
  ];

  return (
    <div>
      <div className="bg-[#f4effe] rounded-md p-6 w-full flex items-start gap-10 mb-10">
        <div className="w-[50px]">
          <img src="/assets/icon/calendar.png" alt="" className="w-full" />
        </div>

        <div>
          <h1 className="font-bold text-3xl">
            Monthly Salary: Jul 01st - 31st
          </h1>
          <p className="my-4">
            Please run payroll for july by 4:00 pm on Monday, June 30th. They
            will recieve funds by Tuesday, July 1st{" "}
          </p>
          <PrimaryButton
            variant="filled"
            name="Initiate Payment"
            type="button"
            radius="lg"
            onClick={() => navigate("/dashboard/payroll/run-payroll")}
          />
        </div>
      </div>

      <div className="">
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
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
      </div>

      <div className="bg-white p-4 rounded-lg mt-[5rem]">
        <PayrollTable />
      </div>
    </div>
  );
};
