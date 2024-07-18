import React from "react";
import { Modal } from "@mantine/core";
import {
  DatePicker,
  PrimaryButton,
  SelectOption,
  TxtArea,
  TxtInput,
} from "../../../../../components";
import { DatePickerInput } from "@mantine/dates";

interface Props {
  opened: boolean;
  close: () => void;
}

export const LeaveRequest: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal opened={opened} onClose={close} centered title="Leave Request">
      <form action="">
        <TxtInput
          label="Subject"
          type="text"
          id="subject"
          name="subject"
          placeholder="e.g Annual Leave "
        />

        <div className="my-5">
          <SelectOption
            label="Leave Type"
            placeholder="e.g Sick"
            data={[
              { value: "sick", label: "sick leave" },
              { value: "annual_leave", label: "annual leave" },
            ]}
            clearable={false}
            name={""}
          />
        </div>

        <div className="flex items-center justify-between my-5 gap-4">
          <DatePicker label="Start Date" className={"w-full"} />
          <DatePicker label="End  Date" className={"w-full"} />
        </div>

        <div className="my-5">
          <TxtArea label="Description" />
        </div>

        <PrimaryButton
          name="Save"
          variant="filled"
          radius={"md"}
          type={"button"}
        />
      </form>
    </Modal>
  );
};
