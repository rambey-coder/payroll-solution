import {
  IconAlertCircle,
  IconFileText,
  IconChecklist,
  IconLoader,
} from "@tabler/icons-react";
import { Paper, SimpleGrid, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { DefaultTab } from "../../../components";
import { PayrollList } from "./components/payrollList/payrollList";
import TaxTable from "../bursary/tax/TaxTable";
import DeductionTable from "../bursary/deduction/DeductionTable";
import IncentiveTable from "../bursary/incentive/IncentiveTable";

export const Payroll = () => {
  const [setPageName] = useOutletContext<any>();

  useEffect(() => {
    setPageName("Payroll");
  }, []);

  const tab = [
    { label: "Payroll List", value: "list", content: <PayrollList /> },
    { label: "Incentive Table", value: "table", content: <IncentiveTable /> },
    {
      label: "Deduction Table ",
      value: "deductionTable",
      content: <DeductionTable />,
    },
    { label: "Tax Table", value: "taxtable", content: <TaxTable /> },
  ];

  return (
    <>
      <DefaultTab defaultValue={"list"} tabs={tab} />
    </>
  );
};
