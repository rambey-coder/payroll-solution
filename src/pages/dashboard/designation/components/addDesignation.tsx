import { Modal } from "@mantine/core";
import React from "react";
import { PrimaryButton, TxtInput } from "../../../../components";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AddDesignation: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered title="Add Designation">
      <TxtInput label="Department" />
      <br />
      <TxtInput label="Team Lead" />
      <br />
      <TxtInput label="Member" />
      <br />
      <PrimaryButton name="Save" variant="filled" radius="md" type="button" />
    </Modal>
  );
};
