import React from "react";
import { DateTime } from "luxon";
import { useSelector } from "react-redux";
import { formatEmploymentType } from "../../../../../../../utils/formatters/employmentType";

export const EmploymentInfo = () => {
  const { employeeDetails } = useSelector(
    (state: any) => state.employee.employee
  );

  console.log(employeeDetails);

  return (
    <div className="bg-white rounded-lg p-5">
      <h3 className="text-2xl text-[#212529] mb-4 ">General Information</h3>

      <div className="grid grid-cols-2 max-w-[400px] gap-8 flex-wrap">
        <div className="flex flex-col gap-1">
          <p className=" font-medium">Joining Date</p>
          <p className="text-xs">
            {DateTime.fromISO(employeeDetails?.createdAt).toISODate()}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className=" font-medium"> Department</p>
          <p className="text-xs capitalize">{employeeDetails?.department}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className=" font-medium">Employment Type</p>
          <p className="text-xs">
            {formatEmploymentType(employeeDetails?.status)}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className=" font-medium">Role</p>
          <p className="text-xs">{employeeDetails?.role}</p>
        </div>
      </div>
    </div>
  );
};
