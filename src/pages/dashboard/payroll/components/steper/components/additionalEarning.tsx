import React from "react";
import { Group, Modal } from "@mantine/core";
import { PrimaryButton, TxtInput } from "../../../../../../components";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AdditionalEarning: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered title="Add Earning">
      <form action="">
        <TxtInput label="Title" />
        <br />
        <TxtInput label="Amount" />
        <br />
        <Group>
          <PrimaryButton
            variant="filled"
            radius="sm"
            type="button"
            name="Save"
          />
          <PrimaryButton
            onClick={close}
            variant="subtle"
            radius="sm"
            type="button"
            name="Cancel"
          />
        </Group>
      </form>
    </Modal>
  );
};
