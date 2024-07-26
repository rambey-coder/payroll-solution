import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ButtonWithIcon } from "../../../../../components/button";
import {
  IconCalendarClock,
  IconChecklist,
  IconDots,
  IconFileText,
  IconPrinter,
  IconTrash,
} from "@tabler/icons-react";
import {
  SimpleGrid,
  Paper,
  Text,
  Table,
  ActionIcon,
  Avatar,
  Badge,
  Group,
  Menu,
  rem,
} from "@mantine/core";
import html2pdf from "html2pdf.js";
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

export const PayrollSuccess = () => {
  const [setPageName] = useOutletContext<any>();

  useEffect(() => {
    setPageName("Success");
  }, []);

  const chartData = {
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

  const handleDownload = async () => {
    const element = document.getElementById("content");

    const opt = {
      margin: [20, 10, 10, 10],
      filename: "payroll.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

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

  const data = [
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
      name: "Robert Wolfkisser",
      salary: 30000,
      allowance: 129,
      department: "Engineer",
      role: "Frontend",
      status: "full_time",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
      name: "Jill Jailbreaker",
      salary: 34000,
      allowance: 20,
      department: "Engineer",
      role: "Frontend",
      status: "part_time",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
      name: "Henry Silkeater",
      salary: 24000,
      allowance: 29,
      department: "Engineer",
      role: "Frontend",
      status: "intern",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
      name: "Bill Horsefighter",
      salary: 22300,
      allowance: 35,
      department: "Engineer",
      role: "Frontend",
      status: "contract",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
      name: "Jeremy Footviewer",
      salary: 32200,
      allowance: 29,
      department: "Engineer",
      role: "Frontend",
      status: "contract",
    },
  ];

  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text c="dimmed" fz="xs">
              {item.role}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.department}</Text>
        <Text fz="xs" c="dimmed">
          Position {/* maybe lead, junior  // */}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">₦{item.salary.toFixed(1)}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">₦{item.allowance}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">₦{item.salary + item.allowance}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <div className="mb-8 flex items-end justify-end">
        <ButtonWithIcon
          leftSection={<IconPrinter stroke={1.5} />}
          variant="filled"
          name="Print payroll"
          type="button"
          onClick={handleDownload}
        />
      </div>
      <div id="content">
        <div className="mb-8">
          <h1 className="font-bold text-2xl mb-2">Payroll Submitted</h1>

          <p className="text-[#495057]">
            The sum of ₦270,000 was debited succesfully on july 30 and all
            employee would be paid by 31th july.
          </p>
        </div>

        <div className="mb-8 ">
          <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>
            {cardData.map((stat) => (
              <Paper withBorder p="md" radius="md" key={stat.title}>
                <div className="flex flex-col items-start gap-6">
                  <div className="bg-[#F6F4FF] p-2 rounded-full">
                    <stat.icon
                      className={"icon "}
                      stroke={1.5}
                      color="#9263f8"
                    />
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

        <div className="outline outline-slate-100 rounded p-4 my-8">
          <h2 className="font-bold text-1xl mb-3">What your company pays</h2>

          <div className="mt-8 flex items-center gap-36">
            <div className="w-[200px] h-[200px]">
              <Doughnut
                data={chartData}
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

        <div className="bg-white p-5">
          <div>
            <h1 className="font-bold text-2xl mb-2">Employee</h1>
            <p className="text-[#495057]">
              All employee included in this payroll
            </p>
          </div>

          <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="md">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Full Name</Table.Th>
                  <Table.Th>Department</Table.Th>
                  <Table.Th>Salary</Table.Th>
                  <Table.Th>Incentive</Table.Th>
                  <Table.Th>Total</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </div>
      </div>
    </div>
  );
};
