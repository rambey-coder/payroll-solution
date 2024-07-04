import { useDisclosure } from "@mantine/hooks";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton } from "../../../components";
import { AddDesignation } from "./components/addDesignation";
import { Badge, Table, Group, ActionIcon, rem } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export const Designation = () => {
  const [setPageName] = useOutletContext<any>();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setPageName("Designation");
  }, []);

  const data = [
    {
      team_lead: "Robert Wolfkisser",
      department: "admin",
      employeeLength: 5,
      active: true,
    },
    {
      team_lead: "Robert Wolfkisser",
      department: "sales",
      employeeLength: 10,
      active: false,
    },
    {
      team_lead: "Robert Wolfkisser",
      department: "engineering",
      employeeLength: 20,
      active: true,
    },
    {
      team_lead: "Robert Wolfkisser",
      department: "product",
      employeeLength: 17,
      active: true,
    },
    {
      team_lead: "Robert Wolfkisser",
      department: "support",
      employeeLength: 10,
      active: false,
    },
  ];

  const rolesData = ["Manager", "Collaborator", "Contractor"];

  const rows = data.map((item) => (
    <Table.Tr key={item.team_lead}>
      <Table.Td>{item.department}</Table.Td>

      <Table.Td>{item.team_lead}</Table.Td>
      <Table.Td>{item.employeeLength}</Table.Td>
      <Table.Td>
        {item.active ? (
          <Badge color="green" variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray"  variant="light">
            Disabled
          </Badge>
        )}
      </Table.Td>

      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <AddDesignation opened={opened} close={close} />
      <div className="flex justify-end w-full">
        <PrimaryButton
          variant="filled"
          radius="md"
          type="button"
          onClick={open}
          name="Add Designation"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow mt-[3rem]">
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Department</Table.Th>
                <Table.Th>Team Lead</Table.Th>
                <Table.Th>Number of employee</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
    </div>
  );
};
