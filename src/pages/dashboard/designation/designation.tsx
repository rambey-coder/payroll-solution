import { useDisclosure } from "@mantine/hooks";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton } from "../../../components";
import { AddDesignation } from "./components/addDesignation";
import { Table, Group, ActionIcon, rem } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useGetAllDepartmentQuery } from "../../../store/designation";

export const Designation = () => {
  const [setPageName] = useOutletContext<any>();
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useGetAllDepartmentQuery();

  const department = data?.data;

  useEffect(() => {
    setPageName("Designation");
  }, []);

  const rows = department?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.departmentName}</Table.Td>

      <Table.Td>{(item.departmentDescription ? (item.departmentDescription.length > 70 ? item.departmentDescription.substring(0, 70)+"..." : item.departmentDescription) : "___" )}</Table.Td>
      <Table.Td>{item.createdAt}</Table.Td>
      <Table.Td>{0}</Table.Td>

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
                <Table.Th>Description</Table.Th>
                <Table.Th>Date Created</Table.Th>
                <Table.Th>Number of employee</Table.Th>
                {/* <Table.Th>Status</Table.Th> */}
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
