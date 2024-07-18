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
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { NameProfile } from "../../../../../components/nameProfile";
import { useGetAllEmployeeQuery } from "../../../../../store/employee";
import { EmployeeData } from "../../../../../store/employee/interface";

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

function filterData(data: EmployeeData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(item).some((key) => {
      const value = item[key];
      if (typeof value === "string") {
        return value.toLowerCase().includes(query);
      }
      return false;
    })
  );
}

function sortData(
  data: EmployeeData[],
  payload: {
    sortBy: keyof EmployeeData | null;
    reversed: boolean;
    search: string;
  }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (payload.reversed) {
        if (typeof valueB === "string" && typeof valueA === "string") {
          return valueB.localeCompare(valueA);
        }
      } else {
        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB);
        }
      }
      return 0;
    }),
    payload.search
  );
}

export const EmployeeTable = () => {
  const { data: allEmployee } = useGetAllEmployeeQuery();
  const data = allEmployee ? allEmployee.data : [];

  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof EmployeeData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const setSorting = (field: keyof EmployeeData) => {
    if (data) {
      const reversed = field === sortBy ? !reverseSortDirection : false;
      setReverseSortDirection(reversed);
      setSortBy(field);
      setSortedData(sortData(data, { sortBy: field, reversed, search }));
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    if (data) {
      setSortedData(
        sortData(data, {
          sortBy,
          reversed: reverseSortDirection,
          search: value,
        })
      );
    }
  };

  const navigate = useNavigate();

  const rows = sortedData?.map((row, i) => (
    <Table.Tr
      onClick={() => navigate(`/dashboard/employee/${row.id}`, { state: row })}
      key={i}
      className="cursor-pointer">
      <Table.Td className="flex items-center gap-3">
        <NameProfile name={`${row?.first_name} ${row?.last_name}`} />
        <span className="capitalize">{`${row?.first_name} ${row?.last_name}`}</span>
      </Table.Td>
      <Table.Td>{Number(row.salary).toLocaleString()}</Table.Td>
      <Table.Td>
        {row.active ? (
          <Badge color="green" variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray" variant="light">
            Diasbled
          </Badge>
        )}
        {/* {row.status === "full_time" ? (
          <Badge color="green" variant="light">
            FULL-TIME
          </Badge>
        ) : row.status === "part_time" ? (
          <Badge color="orange" variant="light">
            PART_TIME
          </Badge>
        ) : row.status === "contract" ? (
          <Badge color="blue" variant="light">
            CONTRACT
          </Badge>
        ) : (
          <Badge color="gray" variant="light">
            INTERN
          </Badge>
        )} */}
      </Table.Td>
      <Table.Td className="capitalize">{row.position.title}</Table.Td>
      <Table.Td>{row.role}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Group className="justify-between mb-3">
        <Text className="text-xl font-medium text-[#495057]">All Employee</Text>

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
              sorted={sortBy === "first_name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("first_name")}>
              Name
            </Th>
            <Th
              sorted={sortBy === "salary"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("salary")}>
              Salary
            </Th>
            <Th
              sorted={sortBy === "active"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("active")}>
              Status
            </Th>
            <Th
              sorted={sortBy === "position"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("position")}>
              Position
            </Th>
            <Th
              sorted={sortBy === "role"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("role")}>
              Role
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows?.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={5}>
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
