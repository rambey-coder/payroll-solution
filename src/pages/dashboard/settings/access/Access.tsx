import React, { useEffect, useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Badge,
  ActionIcon,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconTrash,
  IconPencil,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton } from "../../../../components";
import AddUser from "./AddAccess";
// import Adduser from "./Adduser";
// import { useGetAlluserQuery } from "../../../../store/user/api";
// import { user } from "../../../../store/user/interface";

interface RowData {
  position: string;
  access: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

const data = {
  data: [
    {
      id: 1,
      position: "Human Resource Manager",
      access: "Employee Management",
    },
  ],
};

const AccessTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [setPageName] = useOutletContext<any>();
  // const { data } = useGetAlluserQuery();

  useEffect(() => {
    setPageName("User Access");
  }, []);

  const user = data?.data;
  const rows = data!.data?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.position}</Table.Td>
      <Table.Td>{item.access}</Table.Td>
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
      <AddUser opened={opened} close={close} />
      <div className="flex justify-end w-full">
        <PrimaryButton
          variant="filled"
          radius="md"
          type="button"
          onClick={open}
          name="Add Access"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow mt-[3rem]">
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Position</Table.Th>
                <Table.Th>Access</Table.Th>
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

export default AccessTable;
