import React, { useState } from "react";
import "./style.scss";
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
import { NameProfile } from "../../../../../components/nameProfile";

interface RowData {
  name: string;
  date: string;
  department: string;
  amount: string;
  status: string;
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
    date: "12-03-24",
    name: "Athena Weissnat",
    status: "PENDING",
    department: "Engineering",
    amount: "£300",
  },

  {
    date: "12-04-24",
    name: "John Doe",
    status: "COMPLETED",
    department: "Marketing",
    amount: "£500",
  },
  {
    date: "12-05-24",
    name: "Jane Smith",
    status: "PENDING",
    department: "Sales",
    amount: "£400",
  },
  {
    date: "12-06-24",
    name: "Bob Johnson",
    status: "COMPLETED",
    department: "Engineering",
    amount: "£600",
  },
  {
    date: "12-07-24",
    name: "Alice Williams",
    status: "PENDING",
    department: "HR",
    amount: "£700",
  },
  {
    date: "12-08-24",
    name: "Charlie Brown",
    status: "COMPLETED",
    department: "Finance",
    amount: "£800",
  },
];

export const RecentPayrollHistory = () => {
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
      <Table.Td className="flex gap-3 items-center">
        <NameProfile name={row.name} />
        <span>{row.name}</span>
      </Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>
        {row.status === "COMPLETED" ? (
          <Badge color="green" variant="light">
            Completed
          </Badge>
        ) : row.status === "PENDING" ? (
          <Badge color="orange" variant="light">
            Pending
          </Badge>
        ) : (
          <Badge color="yellow" variant="light">
            Awaiting
          </Badge>
        )}
      </Table.Td>
      <Table.Td>{row.department}</Table.Td>
      <Table.Td>{row.amount}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Group className="justify-between mb-3">
        <Text className="text-xl font-medium text-[#495057]">
          Recent Payroll History
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
              sorted={sortBy === "date"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("date")}>
              Date
            </Th>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}>
              Name
            </Th>
            <Th
              sorted={sortBy === "status"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("status")}>
              Status
            </Th>
            <Th
              sorted={sortBy === "department"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("department")}>
              Department
            </Th>
            <Th
              sorted={sortBy === "amount"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("amount")}>
              Amount Disbursed
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
