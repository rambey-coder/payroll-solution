import React, { useEffect } from "react";
import { Modal, Textarea, TextInput } from "@mantine/core";
// import { useGetAllQuery } from "../../../../store/designation/api";
import { PrimaryButton, SelectOption } from "../../../../components";
import { useForm } from "@mantine/form";
// import {
 
// } from "../../../../store/Access";
import { alert } from "../../../../utils";
import { useGetAllPositionQuery } from "../../../../store/position";
import { useAddPositionAccessMutation, useGetAllAccessQuery } from "../../../../store/access/api";
// import { useAddAccessMutation, useGetAllAccessQuery } from "../../../../store/Access/api";

interface Props {
  opened: boolean;
  close: () => void;
}

const AddAccess: React.FC<Props> = ({ opened, close }) => {
  const { data: positionData, isLoading: positionLoading } = useGetAllPositionQuery();
  const { data: accessData, isLoading: accessLoading } = useGetAllAccessQuery();

  // const { data } = useGetAllQuery();
  const [addAccess, { data: AccessRes, isError, isLoading, isSuccess }] =
    useAddPositionAccessMutation();
  const { refetch } = useGetAllAccessQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success(AccessRes.message as string);
      close();
      refetch();
    } else if (isError) {
      alert.error(AccessRes?.message || "An error occured");
    }
  }, [isSuccess, isError, AccessRes]);

  // const  = data?.data || [];

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      position: "",
      access: "",
    },

    validate: {
      position: (value) =>
        value.length < 0 ? "Position is required " : null,
      access: (value) => (value.length < 0 ? " Access is required" : null),
    },
  });

  const positionSelection = !positionLoading && positionData && positionData?.data?.map(position =>({value: position.id.toString(), label: position.title}))
  const accessSelection = !accessLoading && accessData && accessData?.data?.map((access) =>({value: access!.id!.toString(), label: access.accessName}))


  return (
    <Modal opened={opened && !positionLoading && !accessLoading} onClose={close} centered title="Add Access">
      <form
        action=""
        onSubmit={form.onSubmit(async (val) => {
          form.validate();
          const isValid = form.isValid();
          const updatedValues = {
            positionId: +val.position,
            accessId: +val.access
          }
          if (isValid) await addAccess(updatedValues);
        })}>
        <div className="my-4">
          <SelectOption
           placeholder="Select Position"
           data={positionSelection || [{value:"", label:""}]}
            label="Position"
            name="positionId"
            clearable={false}
            id="position"
            key={form.key("position")}
            {...form.getInputProps("position")}
          />
        </div>
        <div className="mb-4">
        <div className="my-4">
          <SelectOption
           placeholder="Select Access"
           data={accessSelection || [{value:"", label: ""}]}
            label="Access"
            name="accessId"
            clearable={false}
            id="access"
            key={form.key("access")}
            {...form.getInputProps("access")}
          />
        </div>
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

export default AddAccess;
