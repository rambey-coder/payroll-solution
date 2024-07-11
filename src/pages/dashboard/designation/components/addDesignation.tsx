import { Modal } from "@mantine/core";
import React, { useEffect } from "react";
import { PrimaryButton, TxtArea, TxtInput } from "../../../../components";
import { useForm } from "@mantine/form";
import {
  useAddDesignationMutation,
  useGetAllDepartmentQuery,
} from "../../../../store/designation/api";
import { alert } from "../../../../utils";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AddDesignation: React.FC<Props> = ({ opened, close }) => {
  const [addDesignation, { data, isError, isLoading, isSuccess }] =
    useAddDesignationMutation();
  const { refetch } = useGetAllDepartmentQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success(data.message);
      close();
      refetch();
    } else if (isError) {
      alert.error(data?.message || "An error occured");
    }
  }, [isSuccess, isError, data]);

  console.log("err", isError, "load", isLoading, "succ", isSuccess, data);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      departmentName: "",
      departmentDescrition: "",
    },

    validate: {
      departmentDescrition: (value) =>
        value.length < 0 ? "Description is required " : null,
      departmentName: (value) =>
        value.length < 0 ? "Department Title is required" : null,
    },
  });

  return (
    <Modal opened={opened} onClose={close} centered title="Add Designation">
      <form
        onSubmit={form.onSubmit(async (val) => {
          form.validate();
          const isValid = form.isValid();
          if (isValid) await addDesignation(val);
        })}>
        <TxtInput
          label="Department"
          type="text"
          name="departmentName"
          id="departmentName"
          key={form.key("departmentName")}
          {...form.getInputProps("departmentName")}
        />
        <br />
        <TxtArea
          label="Description"
          type="text"
          name="departmentDescrition"
          id="departmentDescrition"
          key={form.key("departmentDescrition")}
          {...form.getInputProps("departmentDescrition")}
        />
        <br />
        <PrimaryButton
          loading={isLoading}
          name="Save"
          variant="filled"
          radius="md"
          type="submit"
        />
      </form>
    </Modal>
  );
};
