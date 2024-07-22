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
import AddTax from "./AddTax";
import { useGetAllTaxQuery } from "../../../../store/tax/api";
import { Tax } from "../../../../store/tax/interface";

interface RowData {
  taxName: string;
  taxDescription: string;
  taxRate: number;
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
    taxName: "VAT",
    taxDescription: "Value Added Tax",
    taxRate: 1.2
  }]
}


const TaxTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [setPageName] = useOutletContext<any>();
  const { data } = useGetAllTaxQuery();

  useEffect(() => {
    setPageName("Bursary");
  }, []);

  const tax = data?.data;
  const rows = (tax! && tax! as Tax[])?.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.taxName}</Table.Td>
      <Table.Td>{item.taxDescription}</Table.Td>
      <Table.Td>{item.taxRate }</Table.Td>
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
      <AddTax opened={opened} close={close} />
      <div className="flex justify-end w-full">
        <PrimaryButton
          variant="filled"
          radius="md"
          type="button"
          onClick={open}
          name="Add Tax"
        />
      </div> 
  <div className="bg-white p-4 rounded-lg shadow mt-[3rem]">
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Tax Name</Table.Th>
            <Table.Th>Tax Description</Table.Th>
            <Table.Th>Tax Rate</Table.Th>
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


export default TaxTable