import React from "react";
import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  rem,
  TextInput,
  Badge,
} from "@mantine/core";
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
  IconSearch,
} from "@tabler/icons-react";

export const EmployeeList = () => {
  const data = [
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
      name: "Robert Wolfkisser",
      totalHour: 300,
      totalDay: 29,
      department: "Engineer",
      role: "Frontend",
      status: "full_time",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
      name: "Jill Jailbreaker",
      totalHour: 300,
      totalDay: 29,
      department: "Engineer",
      role: "Frontend",
      status: "part_time",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
      name: "Henry Silkeater",
      totalHour: 300,
      totalDay: 29,
      department: "Engineer",
      role: "Frontend",
      status: "intern",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
      name: "Bill Horsefighter",
      totalHour: 300,
      totalDay: 29,
      department: "Engineer",
      role: "Frontend",
      status: "contract",
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
      name: "Jeremy Footviewer",
      totalHour: 300,
      totalDay: 29,
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
        <Text fz="sm">{item.totalHour.toFixed(1)}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.totalDay}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">
          {" "}
          {item.status === "full_time" ? (
            <Badge color="green" variant="light">
              FULL-TIME
            </Badge>
          ) : item.status === "part_time" ? (
            <Badge color="orange" variant="light">
              PART-TIME
            </Badge>
          ) : item.status === "contract" ? (
            <Badge color="blue" variant="light">
              CONTRACT
            </Badge>
          ) : (
            <Badge color="gray" variant="light">
              INTERN
            </Badge>
          )}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal>
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <IconTrash
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                color="red">
                Remove from Payroll
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="my-[3rem] bg-white p-8 rounded shadow">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-bold text-2xl mb-2">Employee</h1>
          <p className="text-[#495057]">
            View all employee included in this payroll
          </p>
        </div>

        <TextInput
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          //   value={search}
          //   onChange={handleSearchChange}
        />
      </div>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Full Name</Table.Th>
              <Table.Th>Department</Table.Th>
              <Table.Th>Total Hour</Table.Th>
              <Table.Th>Total Day</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
};
