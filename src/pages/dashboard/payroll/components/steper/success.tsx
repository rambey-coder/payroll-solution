import React from "react";
import { SimpleGrid, Paper, Text } from "@mantine/core";
import {
  IconFileText,
  IconChecklist,
  IconCalendarClock,
  IconPrinter,
} from "@tabler/icons-react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { ButtonWithIcon } from "../../../../../components";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export const Success = () => {
  const cardData = [
    {
      title: "Total Payroll",
      icon: IconFileText,
      value: "₦207,000",
    },
    { title: "Payroll Date", icon: IconChecklist, value: "Jul 30 2024" },
    {
      title: "Payroll Payment Date",
      icon: IconCalendarClock,
      value: "Jul 31 2024",
    },
  ];

  const data = {
    labels: ["Salary", "Bonus", "Allowance", "Deduction"],
    datasets: [
      {
        data: [60, 10, 20, 10],
        backgroundColor: [
          "#fb8500", // Salary
          "#c1121f", // Bonus
          "#14213d", // Allowance
          "#31572c", // Deduction
        ],
        hoverBackgroundColor: ["#fb8500", "#c1121f", "#14213d", "#31572c"],
      },
    ],
  };

  return (
    <div className="my-[3rem] bg-white p-8 rounded shadow" id="">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl mb-2">Payroll Submitted</h1>
        </div>
        <p className="text-[#495057]">
          The sum of ₦270,000 on july 30 and all employee would be paid by 31th
          july. Make sure all funds are available.
        </p>
      </div>

      <div className="mb-8">
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>
          {cardData.map((stat) => (
            <Paper withBorder p="md" radius="md" key={stat.title}>
              <div className="flex flex-col items-start gap-6">
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

      <div className="outline outline-slate-100 rounded p-4">
        <h2 className="font-bold text-1xl mb-3">What your company pays</h2>

        <div className="mt-8 flex items-center gap-36">
          <div className="w-[200px] h-[200px]">
            <Doughnut
              data={data}
              options={{
                responsive: true,
                cutout: "75%",
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>

          <div className="w-[40%]">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-lg bg-[#fb8500]"></div>
                <p>Salary</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-lg bg-[#14213d]"></div>
                <p>Allowance</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-lg bg-[#c1121f]"></div>
                <p>Bonus</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-lg bg-[#31572c]"></div>
                <p>Deduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
