import React, { useEffect } from "react";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useGetAllDepartmentQuery } from "../../../../store/designation/api";
import { PrimaryButton, SelectOption } from "../../../../components";
import { useForm } from "@mantine/form";
import {
  useAddPositionMutation,
  useGetAllPositionQuery,
} from "../../../../store/position";
import { alert } from "../../../../utils";

interface Props {
  opened: boolean;
  close: () => void;
}

const AddPosition: React.FC<Props> = ({ opened, close }) => {
  const { data } = useGetAllDepartmentQuery();
  const [addPosition, { data: positionRes, isError, isLoading, isSuccess }] =
    useAddPositionMutation();
  const { refetch } = useGetAllPositionQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success(positionRes.message);
      close();
      refetch();
    } else if (isError) {
      alert.error(positionRes?.message || "An error occured");
    }
  }, [isSuccess, isError, positionRes]);

  const department = data?.data || [];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      departmentId: "",
      description: "",
      title: "",
      salary: 0,
    },

    validate: {
      description: (value) =>
        value.length < 0 ? "Description is required " : null,
      title: (value) => (value.length < 0 ? " Title is required" : null),
    },
  });

  return (
    <Modal opened={opened} onClose={close} centered title="Add Position">
      <form
        action=""
        onSubmit={form.onSubmit(async (val) => {
          const updatedValues = {
            ...val,
            salary: Number(val.salary),
          };
          form.validate();
          const isValid = form.isValid();
          if (isValid) await addPosition(updatedValues);
        })}>
        <SelectOption
          label="Department"
          placeholder="Select department"
          name="departmentId"
          clearable
          data={department?.map((item) => ({
            label: item.departmentName || "",
            value: item.id.toString(),
          }))}
          id="departmentId"
          key={form.key("departmentId")}
          {...form.getInputProps("departmentId")}
        />
        <div className="my-4">
          <TextInput
            label="Title"
            type="text"
            name="title"
            id="title"
            key={form.key("title")}
            {...form.getInputProps("title")}
          />
        </div>
        <div className="mb-4">
          <TextInput
            label="Salary"
            type="text"
            name="salary"
            id="salary"
            key={form.key("salary")}
            {...form.getInputProps("salary")}
          />
        </div>
        <div className="mb-4">
          <Textarea
            label="Description"
            name="description"
            id="description"
            key={form.key("description")}
            {...form.getInputProps("description")}
          />
        </div>

        <PrimaryButton
          loading={isLoading}
          name="Save"
          variant="filled"
          type="submit"
          radius="md"
        />
      </form>
    </Modal>
  );
};

export default AddPosition;
