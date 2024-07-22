import React, { useEffect } from "react";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useGetAllDepartmentQuery } from "../../../../store/designation/api";
import { PrimaryButton, SelectOption } from "../../../../components";
import { useForm } from "@mantine/form";
import {
 
} from "../../../../store/tax";
import { alert } from "../../../../utils";
import { useAddTaxMutation, useGetAllTaxQuery } from "../../../../store/tax/api";

interface Props {
  opened: boolean;
  close: () => void;
}

const AddTax: React.FC<Props> = ({ opened, close }) => {
  const { data } = useGetAllDepartmentQuery();
  const [addTax, { data: TaxRes, isError, isLoading, isSuccess }] =
    useAddTaxMutation();
  const { refetch } = useGetAllTaxQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success(TaxRes.message as string);
      close();
      refetch();
    } else if (isError) {
      alert.error(TaxRes?.message || "An error occured");
    }
  }, [isSuccess, isError, TaxRes]);

  const department = data?.data || [];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      taxName: "",
      taxDescription: "",
      taxRate: 0,
    },

    validate: {
      taxName: (value) =>
        value.length < 0 ? "Name is required " : null,
      taxRate: (value) => (value < 0 ? " Tax rate is required" : null),
    },
  });

  return (
    <Modal opened={opened} onClose={close} centered title="Add Tax">
      <form
        action=""
        onSubmit={form.onSubmit(async (val) => {
          form.validate();
          const isValid = form.isValid();
          let updatedValues = {...val, taxRate: parseFloat(val.taxRate.toString())}
          if (isValid) await addTax(updatedValues);
        })}>
        <div className="my-4">
          <TextInput
            label="Tax Name"
            type="text"
            name="taxName"
            id="taxName"
            key={form.key("taxName")}
            {...form.getInputProps("taxName")}
          />
        </div>
        <div className="mb-4">
          <Textarea
            label="Tax Description"            name="taxDescription"
            id="taxDescription"
            key={form.key("taxDescription")}
            {...form.getInputProps("taxDescription")}
          />
        </div>
        <div className="mb-4">
        <TextInput
            label="Tax Rate"
            type="text"
            name="taxRate"
            id="taxRate"
            key={form.key("taxRate")}
            {...form.getInputProps("taxRate")}
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

export default AddTax;
