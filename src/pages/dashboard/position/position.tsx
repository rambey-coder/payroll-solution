import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton } from "../../../components";
import { useDisclosure } from "@mantine/hooks";
import AddPosition from "./components/addPosition";
import { useGetAllPositionQuery } from "../../../store/position";
import { Table, Group, ActionIcon, rem } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

function Position() {
  const [setPageName] = useOutletContext<any>();
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useGetAllPositionQuery();

  useEffect(() => {
    setPageName("Position");
  }, []);

  const position = data?.data;
  const rows = position?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.department.departmentName}</Table.Td>
      <Table.Td>{item.title}</Table.Td>

      <Table.Td>{item.salary || "--"}</Table.Td>
      <Table.Td>{item.description}</Table.Td>
      <Table.Td>{item.createdAt}</Table.Td>

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
      <AddPosition opened={opened} close={close} />
      <div className="flex justify-end w-full">
        <PrimaryButton
          variant="filled"
          radius="md"
          type="button"
          onClick={open}
          name="Add Position"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow mt-[3rem]">
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Department</Table.Th>
                <Table.Th>Title</Table.Th>
                <Table.Th>Salary</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
    </div>
  );
}

export default Position;
