import {
  IconAlertCircle,
  IconFileText,
  IconChecklist,
  IconLoader,
} from "@tabler/icons-react";
import { Paper, SimpleGrid, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { PayrollTable } from "./components";
import { useOutletContext } from "react-router-dom";
import { PrimaryButton } from "../../../components/button/button";
import { DefaultTab } from "../../../components";
import { PayrollList } from "./components/payrollList/payrollList";

export const Payroll = () => {
  const [setPageName] = useOutletContext<any>();

  useEffect(() => {
    setPageName("Payroll");
  }, []);

  const tab = [
    { label: "Payroll List", value: "list", content: <PayrollList /> },
    { label: "Payroll Settings", value: "settings", content: <div></div> },
  ];

  return (
    <>
      <DefaultTab defaultValue={"list"} tabs={tab} />
    </>
  );
};
