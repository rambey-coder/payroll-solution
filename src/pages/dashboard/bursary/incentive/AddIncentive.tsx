import React, { useEffect } from "react";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useGetAllDepartmentQuery } from "../../../../store/designation/api";
import { PrimaryButton, SelectOption } from "../../../../components";
import { useForm } from "@mantine/form";
import {
 
} from "../../../../store/incentive";
import { alert } from "../../../../utils";
import { useAddIncentiveMutation, useGetAllIncentiveQuery } from "../../../../store/incentive/api";

interface Props {
  opened: boolean;
  close: () => void;
}

const AddIncentive: React.FC<Props> = ({ opened, close }) => {
  const { data } = useGetAllDepartmentQuery();
  const [addIncentive, { data: IncentiveRes, isError, isLoading, isSuccess }] =
    useAddIncentiveMutation();
  const { refetch } = useGetAllIncentiveQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success(IncentiveRes.message as string);
      close();
      refetch();
    } else if (isError) {
      alert.error(IncentiveRes?.message || "An error occured");
    }
  }, [isSuccess, isError, IncentiveRes]);

  const department = data?.data || [];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      incentiveName: "",
      incentiveDescription: "",
      amount: 0,
    },

    validate: {
      incentiveDescription: (value) =>
        value.length < 0 ? "Value is required " : null,
      amount: (value) => (value < 0 ? " Title is required" : null),
    },
  });

  return (
    <Modal opened={opened} onClose={close} centered title="Add Incentive">
      <form
        action=""
        onSubmit={form.onSubmit(async (val) => {
          form.validate();
          const isValid = form.isValid();
          if (isValid) await addIncentive(val);
        })}>
        <div className="my-4">
          <TextInput
            label="Incentive Name"
            type="text"
            name="incentiveName"
            id="incentiveName"
            key={form.key("incentiveName")}
            {...form.getInputProps("incentiveName")}
          />
        </div>
        <div className="mb-4">
          <Textarea
            label="Incentive Description"            name="incentiveDescription"
            id="incentiveDescription"
            key={form.key("incentiveDescription")}
            {...form.getInputProps("incentiveDescription")}
          />
        </div>
        <div className="mb-4">
        <TextInput
            label="Incentive Amount"
            type="number"
            name="amount"
            id="amount"
            key={form.key("amount")}
            {...form.getInputProps("amount")}
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

export default AddIncentive;
