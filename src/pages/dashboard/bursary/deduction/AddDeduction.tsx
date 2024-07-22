import React, { useEffect } from "react";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useGetAllDepartmentQuery } from "../../../../store/designation/api";
import { PrimaryButton, SelectOption } from "../../../../components";
import { useForm } from "@mantine/form";
import {
 
} from "../../../../store/deduction";
import { alert } from "../../../../utils";

interface Props {
  opened: boolean;
  close: () => void;
}

const AddDeduction: React.FC<Props> = ({ opened, close }) => {
  const { data } = useGetAllDepartmentQuery();
//   const [addDeduction, { data: DeductionRes, isError, isLoading, isSuccess }] =
//     useAddDeductionMutation();
//   const { refetch } = useGetAllDeductionQuery();

//   useEffect(() => {
//     if (isSuccess) {
//       alert.success(DeductionRes.message);
//       close();
//       refetch();
//     } else if (isError) {
//       alert.error(DeductionRes?.message || "An error occured");
//     }
//   }, [isSuccess, isError, DeductionRes]);

  const department = data?.data || [];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      DeductionName: "",
      description: "",
      amount: "",
    },

    validate: {
      description: (value) =>
        value.length < 0 ? "Value is required " : null,
      amount: (value) => (value.length < 0 ? " Title is required" : null),
    },
  });

  return (
    <Modal opened={opened} onClose={close} centered title="Add Deduction">
      <form
        action=""
        onSubmit={form.onSubmit(async (val) => {
          const updatedValues = {
            ...val,
            amount: Number(val.amount),
          };
          form.validate();
          const isValid = form.isValid();
        //   if (isValid) await addDeduction(updatedValues);
        })}>
        <div className="my-4">
          <TextInput
            label="Deduction Name"
            type="text"
            name="deductionName"
            id="deductionName"
            key={form.key("deductionName")}
            {...form.getInputProps("deductionName")}
          />
        </div>
        <div className="mb-4">
          <Textarea
            label="Deduction Description"            name="deductionDescription"
            id="deductionDescription"
            key={form.key("deductionDescription")}
            {...form.getInputProps("deductionDescription")}
          />
        </div>
        <div className="mb-4">
        <TextInput
            label="Deduction Amount"
            type="number"
            name="deductionAmount"
            id="deductionAmount"
            key={form.key("deductionAmount")}
            {...form.getInputProps("deductionAmount")}
          />
        </div>

        <PrimaryButton
          loading={false}
          name="Save"
          variant="filled"
          type="submit"
          radius="md"
        />
      </form>
    </Modal>
  );
};

export default AddDeduction;
