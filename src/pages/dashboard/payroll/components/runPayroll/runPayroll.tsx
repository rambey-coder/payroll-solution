import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Stepper, Button, Group } from "@mantine/core";
import { IconCalendarWeek, IconChevronLeft } from "@tabler/icons-react";
import { EmployeeList } from "../steper/employeeList";
import { Bonus } from "../steper/bonus";
import { Review } from "../steper/review";
import { PrimaryButton } from "../../../../../components/button/button";
import { Success } from "../steper/success";

export const RunPayroll = () => {
  const navigate = useNavigate();
  const [setPageName] = useOutletContext<any>();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  if (active === 4) navigate("/dashboard/payroll/success-payroll");
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    setPageName("Run Payroll");
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="border border-[#d3c1fc] w-9 h-9 flex items-center justify-center rounded cursor-pointer">
          <IconChevronLeft size={"20"} stroke={"1.5"} color="#9263f8" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconCalendarWeek stroke={"1.5"} size={"15"} color="#495057" />
            <p className="font-semibold text-xs text-[#495057]">
              Payroll Period:
            </p>
          </div>
          <p className="font-semibold text-xs text-[#212529]">
            Jul 01st - 31st
          </p>
        </div>
      </div>

      <div className="my-12">
        <Stepper
          color="#9263f8"
          size="sm"
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}>
          <Stepper.Step label="Employee" description="Select employee">
            <EmployeeList />
          </Stepper.Step>
          <Stepper.Step
            label="Bonus & Allowance"
            description=" Add extra cash for your employee">
            <Bonus />
          </Stepper.Step>
          <Stepper.Step
            label="Review Payroll"
            description="Review your payroll payment">
            <Review />
          </Stepper.Step>
          <Stepper.Step
            label="Success"
            description="You succesfully run your payroll">
            <Success />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <PrimaryButton
            type="button"
            name="Back"
            variant="subtle"
            radius="sm"
            onClick={prevStep}
          />

          <PrimaryButton
            type="button"
            name={active === 4 ? "Finish Payroll" : "Next"}
            variant="filled"
            radius="sm"
            onClick={nextStep}
          />
        </Group>
      </div>
    </div>
  );
};
