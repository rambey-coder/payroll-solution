import React, { useState } from "react";
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
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";

interface RowData {
  status: string;
  payrollPeriod: string;
  disbursmentType: string;
  transferShedule: string;
  totalAmount: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={"th"}>
      <UnstyledButton onClick={onSort} className={"control"}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={"icon"}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    status: "Drafts",
    payrollPeriod: "Dec 2023",
    disbursmentType: "Salary",
    transferShedule: "Monthly",
    totalAmount: "$13,456",
  },
  {
    status: "Completed",
    payrollPeriod: "Dec 2023",
    disbursmentType: "Salary",
    transferShedule: "Monthly",
    totalAmount: "$4,145",
  },
  {
    status: "Pending",
    payrollPeriod: "Dec 2023",
    disbursmentType: "Q3 Bonus",
    transferShedule: "Nov 2023",
    totalAmount: "$7,745",
  },
  {
    status: "Overdue",
    payrollPeriod: "Nov 2023",
    disbursmentType: "Q3 Bonus",
    transferShedule: "Nov 2023",
    totalAmount: "$2,188",
  },
  {
    status: "Drafts",
    payrollPeriod: "Nov 2023",
    disbursmentType: "Annual Bonus",
    transferShedule: "Yearly",
    totalAmount: "$13,456",
  },
  {
    status: "Completed",
    payrollPeriod: "Nov 2023",
    disbursmentType: "Salary",
    transferShedule: "Monthly",
    totalAmount: "$4,145",
  },
  {
    status: "Pending",
    payrollPeriod: "Oct 2023",
    disbursmentType: "Salary",
    transferShedule: "Monthly",
    totalAmount: "$7,745",
  },
  {
    status: "Overdue",
    payrollPeriod: "Oct 2023",
    disbursmentType: "Salary",
    transferShedule: "Monthly",
    totalAmount: "$2,188",
  },
  {
    status: "Drafts",
    payrollPeriod: "Oct 2023",
    disbursmentType: "Monthly Bonus",
    transferShedule: "Sept 2023",
    totalAmount: "$13,456",
  },
  {
    status: "Completed",
    payrollPeriod: "Sept 2023",
    disbursmentType: "Monthly Bonus",
    transferShedule: "Sept 2023",
    totalAmount: "$4,145",
  },
  {
    status: "Pending",
    payrollPeriod: "Sept 2023",
    disbursmentType: "Q3 Bonus",
    transferShedule: "March 2023",
    totalAmount: "$7,745",
  },
  {
    status: "Overdue",
    payrollPeriod: "Sept 2023",
    disbursmentType: "Q3 Bonus",
    transferShedule: "March 2023",
    totalAmount: "$2,188",
  }
  
];

export const PayrollTable = () => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row, i) => (
    <Table.Tr key={i}>
      <Table.Td>{row.payrollPeriod}</Table.Td>
      <Table.Td>{row.disbursmentType}</Table.Td>
      <Table.Td>
        {row.status === "Completed" ? (
          <Badge color="green" variant="light">
            Completed
          </Badge>
        ) : row.status === "Pending" ? (
          <Badge color="orange" variant="light">
            Pending
          </Badge>
        ) : row.status === "Drafts" ? (
          <Badge color="blue" variant="light">
            Drafts
          </Badge>
        ) : (
          <Badge color="red" variant="light">
            Overdue
          </Badge>
        )}
      </Table.Td>
      <Table.Td>{row.transferShedule}</Table.Td>
      <Table.Td>{row.totalAmount}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Group className="justify-between mb-3">
        <Text className="text-xl font-medium text-[#495057]">
          Payroll Disbursment
        </Text>

        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={search}
          onChange={handleSearchChange}
        />
      </Group>
      <hr />

      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        className="mt-3"
        layout="fixed">
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "payrollPeriod"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("payrollPeriod")}>
              Payroll Period
            </Th>
            <Th
              sorted={sortBy === "disbursmentType"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("disbursmentType")}>
              Disbursment Type
            </Th>
            <Th
              sorted={sortBy === "status"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("status")}>
              Status
            </Th>
            <Th
              sorted={sortBy === "transferShedule"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("transferShedule")}>
              Transfer Shedule
            </Th>
            <Th
              sorted={sortBy === "totalAmount"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("totalAmount")}>
              Total Disbursment
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
