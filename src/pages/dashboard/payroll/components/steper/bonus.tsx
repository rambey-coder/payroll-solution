import React from "react";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  rem,
  Menu,
} from "@mantine/core";
import {
  IconDots,
  IconMinus,
  IconPencil,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { AdditionalEarning } from "./components/additionalEarning";

export const Bonus = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const data = [
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
      name: "Robert Wolfkisser",
      job: "Engineer",
      email: "rob_wolf@gmail.com",
      phone: "+44 (452) 886 09 12",
      department: "Engineer",
      role: "Frontend",
      status: "part_time",
      salary: 3000,
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
      name: "Jill Jailbreaker",
      job: "Engineer",
      email: "jj@breaker.com",
      phone: "+44 (934) 777 12 76",
      department: "Engineer",
      role: "Frontend",
      status: "contract",
      salary: 3000,
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
      name: "Henry Silkeater",
      job: "Designer",
      email: "henry@silkeater.io",
      phone: "+44 (901) 384 88 34",
      department: "Engineer",
      role: "Frontend",
      status: "full_time",
      salary: 3000,
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
      name: "Bill Horsefighter",
      job: "Designer",
      email: "bhorsefighter@gmail.com",
      phone: "+44 (667) 341 45 22",
      department: "Engineer",
      role: "Frontend",
      status: "intern",
      salary: 3000,
    },
    {
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
      name: "Jeremy Footviewer",
      job: "Manager",
      email: "jeremy@foot.dev",
      phone: "+44 (881) 245 65 65",
      department: "Engineer",
      role: "Frontend",
      status: "contract",
      salary: 3000,
    },
  ];

  const jobColors: Record<string, string> = {
    engineer: "blue",
    manager: "cyan",
    designer: "pink",
  };

  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
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
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.department}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.salary}</Text>
      </Table.Td>
      <Table.Td>
        {/* were gonna show the list of allowance, bonus, deductions and reimbursement. */}
        <Group gap={2}>
          <ActionIcon variant="light" color="red" size={"xs"}>
            <IconMinus
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
              size={14}
            />
          </ActionIcon>
          <Text fz="sm"> Bonus - $80</Text>
        </Group>
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
                onClick={open}
                leftSection={
                  <IconPlus
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }>
                Add new earning
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconTrash
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                color="red">
                Remove All Earnings
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        {/* here,  User should be able to add and delete bonus */}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <AdditionalEarning opened={opened} close={close} />
      <div className="my-[3rem] bg-white p-8 rounded shadow">
        <div className="mb-8">
          <h1 className="font-bold text-2xl mb-2">Bonus</h1>
          <p className="text-[#495057]">
            Add additionall earnings or deductions for employee
          </p>
        </div>

        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Employee</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Department</Table.Th>
                <Table.Th>Salary</Table.Th>
                <Table.Th>Additional Earning</Table.Th>
                <Table.Th />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
    </>
  );
};
