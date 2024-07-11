import React, { useEffect } from "react";
import { Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  PrimaryButton,
  SelectOption,
  TxtInput,
} from "../../../../../components";
import {
  useAddEmployeeMutation,
  useGetAllEmployeeQuery,
} from "../../../../../store/employee";
import { alert } from "../../../../../utils";
import { statusList } from "./constants";
import { useGetAllPositionQuery } from "../../../../../store/position/api";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AddEmployee: React.FC<Props> = ({ opened, close }) => {
  const [addEmployee, { data, isError, isLoading, isSuccess }] =
    useAddEmployeeMutation();

  const { refetch } = useGetAllEmployeeQuery();
  const { data: positionList } = useGetAllPositionQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success("Employee Added Successfully");
      refetch();
      close();
    }

    if (isError) alert.error("An error Occured" || data?.message);
  }, [isSuccess, isError, data]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      first_name: "",
      role: "",
      salary: "",
      positionId: "",
      email: "",
      last_name: "",
      phone: "",
      address: "",
      active: false,
    },
  });

  const transformedData =
    positionList?.data?.map((item) => ({
      label: `${item.title}`,
      value: item.id.toString(),
    })) || [];

  return (
    <Modal
      opened={opened}
      onClose={close}
      size={"lg"}
      centered
      title="Add Employee">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4"
        onSubmit={form.onSubmit(async (values) => {
          form.validate();

          const isValid = form.isValid();

          if (isValid) {
            const payload = {
              ...values,
              salary: Number(values.salary),
              active:
                typeof values.active === "string"
                  ? values.active === "true"
                  : values.active,
            };

            await addEmployee(payload);
          }
        })}>
        <div className="mb-3">
          <TxtInput
            label="First Name"
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First Name"
            required
            key={form.key("first_name")}
            {...form.getInputProps("first_name")}
          />
        </div>
        <div className="mb-3">
          <TxtInput
            label="Last Name"
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            required
            key={form.key("last_name")}
            {...form.getInputProps("last_name")}
          />
        </div>
        <div className="mb-3">
          <TxtInput
            label="Email"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        </div>
        <div className="mb-3">
          <TxtInput
            label="Phone Number"
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />
        </div>
        <div className="mb-3">
          <TxtInput
            label="Address"
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            required
            key={form.key("address")}
            {...form.getInputProps("address")}
          />
        </div>
        <div className="mb-3">
          <SelectOption
            label="Position"
            name="positionId"
            placeholder="Select position"
            required
            data={transformedData}
            clearable={true}
            onChange={(value) => form.setFieldValue("positionId", value)}
          />
        </div>

        <div className="mb-3">
          <TxtInput
            label="Role"
            type="text"
            id="role"
            name="role"
            placeholder="Manager"
            required
            key={form.key("role")}
            {...form.getInputProps("role")}
          />
        </div>
        <div className="mb-3">
          <TxtInput
            label="Salary"
            type="text"
            id="salary"
            name="salary"
            placeholder="Salary"
            required
            key={form.key("salary")}
            {...form.getInputProps("salary")}
          />
        </div>
        <div className="mb-7 col-span-1 md:col-span-2">
          <SelectOption
            label="Status"
            name="active"
            placeholder="Select status"
            required
            data={statusList}
            clearable={true}
            onChange={(value) => form.setFieldValue("active", value)}
          />
        </div>
        <PrimaryButton
          fullWidth
          color="#9263f8"
          radius="md"
          name="Save"
          type="submit"
          variant="filled"
          loading={isLoading}
        />
      </form>
    </Modal>
  );
};
