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
import AddIncentive from "./AddIncentive";
import { useGetAllIncentiveQuery } from "../../../../store/incentive/api";
import { Incentive } from "../../../../store/incentive/interface";

interface RowData {
  IncentiveName: string;
  IncentiveDescription: string;
  IncentiveAmount: number;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

const data = {
  data: [{
    id:1,
    IncentiveName: "VAT",
    IncentiveDescription: "Value Added Incentive",
    IncentiveAmount: 1200
  }]
}


const IncentiveTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [setPageName] = useOutletContext<any>();
  const { data } = useGetAllIncentiveQuery();

  useEffect(() => {
    setPageName("Bursary");
  }, []);

  const incentive = data?.data;
  const rows = (incentive && incentive as Incentive[])?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.incentiveName}</Table.Td>
      <Table.Td>{item.incentiveDescription}</Table.Td>
      <Table.Td>{item.amount }</Table.Td>
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
    <div className=" flex items-center  w-full justify-center">
      <div className="w-2/3">
      <AddIncentive opened={opened} close={close} />
      <div className="flex justify-end w-full">
        <PrimaryButton
          variant="filled"
          radius="md"
          type="button"
          onClick={open}
          name="Add Incentive"
        />
      </div> 
  <div className="bg-white p-4 rounded-lg shadow mt-[3rem]">
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Incentive Name</Table.Th>
            <Table.Th>Incentive Description</Table.Th>
            <Table.Th>Incentive Amount</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  </div>
  </div>
  </div>
  )

}


export default IncentiveTable