
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
    { label: "Tax", value: "tax", content: <TaxTable /> },
    { label: "Incentive", value: "incentive", content: <IncentiveTable /> },
    { label: "Deduction", value: "deduction", content: <DeductionTable /> },  ];

  return (
    <>
      <DefaultTab defaultValue={"list"} tabs={tab} />
    </>
  );
};
