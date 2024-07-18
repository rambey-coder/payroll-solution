import React from "react";
import { TxtInput } from "../../../../../../../components";
import { useSelector } from "react-redux";
import { IEmployeeRes } from "../../../../../../../store/employee/interface";

interface Props {
  data: IEmployeeRes | any;
}

export const PersonalInfo: React.FC<Props> = ({ data }) => {
  const { employeeDetails } = useSelector(
    (state: any) => state.employee.employee
  );

  const userInfo = employeeDetails?.user;

  return (
    <div className="bg-white rounded-lg p-5">
      <h3 className="text-2xl text-[#212529] mb-4 ">Personal Information</h3>

      <div className="flex gap-4 flex-wrap items-center justify-between w-full">
        <TxtInput
          name="firstName"
          label="First Name"
          value={data?.first_name}
          className="w-[45%]"
          readOnly
        />
        <TxtInput
          name="lastName"
          label="Last Name"
          value={data?.last_name}
          readOnly
          className="w-[45%]"
        />
        <TxtInput
          name="email"
          label="Email Address"
          value={data?.email}
          className="w-[45%]"
          readOnly
        />
        <TxtInput
          name="address"
          className="w-[45%]"
          label="Address"
          value={data?.address}
          readOnly
        />
        <TxtInput
          name="state"
          label="State"
          value=""
          readOnly
          className="w-[45%]"
        />
        <TxtInput
          name="country"
          label="Country"
          value=""
          readOnly
          className="w-[45%]"
        />
      </div>
    </div>
  );
};
