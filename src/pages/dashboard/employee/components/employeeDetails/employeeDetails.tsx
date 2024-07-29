import React, { useEffect, useRef, useState } from "react";
import { BreadCrumb } from "../../../../../components/breadCrumb/breadCrumb";
import { useOutletContext, useParams } from "react-router-dom";
import { EmployeeStat } from "./components/employeeStat";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { AttendanceTable } from "./components";
import { ButtonWithIcon, PrimaryButton, Tab } from "../../../../../components";
import { ITab } from "../../../../../components/tab/interface";
import { PersonalInfo } from "./components/personalInformation/personalInfo";
import { EmploymentInfo } from "./components/employmentInfo/employmentInfo";
import { Leave } from "./components/leave/leave";
import { useGetEmployeeQuery } from "../../../../../store/employee";
import { Avatar, Group } from "@mantine/core";
import { useUploadProfilePictureMutation } from "../../../../../store/auth/api";
import { alert } from "../../../../../utils/alert";

export const EmployeeDetails = () => {
  const { id } = useParams<string>();
  const [setPageName] = useOutletContext<any>();

  const { data } = useGetEmployeeQuery(id);
  const avatarRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [uploadProfilePicture, { isLoading, isError, isSuccess }] =
    useUploadProfilePictureMutation();

  const employeeData = data?.data;

  useEffect(() => {
    setPageName("Employee Details");
  }, []);

  const items = [
    {
      title: "Employee",
      href: "/dashboard/employee",
    },
    {
      title: id ? id : "",
      href: "#",
    },
  ];

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    console.log(file);

    if (file) {
      if (file.size > 204800) {
        alert.error("File size should not exceed 200KB");
        return;
      }

      try {
        const response = await uploadProfilePicture({
          id: id,
          body: { profilePicture: file },
        }).unwrap();
        console.log("Profile picture uploaded:", response);
      } catch (error) {
        console.error("Failed to upload profile picture:", error);
      }

      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        setSelectedImage(base64Image);
      };

      reader.readAsDataURL(file);

      try {
        const response = await uploadProfilePicture({
          id: id,
          body: { profilePicture: file },
        }).unwrap();
        console.log("Profile picture uploaded:", response);
      } catch (error) {
        console.error("Failed to upload profile picture:", error);
      }
    }
  };

  const tabs: ITab[] = [
    {
      label: "Personal Information", //contatct, email add, home add, phone no.,  gender
      value: "personal_info",
      content: <PersonalInfo data={employeeData} />,
    },
    {
      label: "Employment Details", //role, position, department, employment type
      value: "employment_details",
      content: <EmploymentInfo />,
    },
    {
      label: "Leave",
      value: "leave",
      content: <Leave />,
    },
    {
      label: "Salary", //amount, payment date, bonus => being able to add allowances & deduction {allowance name, amount} & bonus
      value: "salary",
      content: <div>Third tab content</div>,
    },
    {
      label: "Attendance",
      value: "attendance",
      content: (
        <div className="bg-white p-4 mt-8">
          <AttendanceTable />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <BreadCrumb items={items} />

        <div className="flex gap-5 items-center">
          <ButtonWithIcon
            leftSection={
              <IconTrash className="icon" stroke={1.5} color="#d90429" />
            }
            variant="light"
            name="Terminate Contract"
            color="#d90429"
            type="button"
            radius="md"
          />

          <ButtonWithIcon
            leftSection={
              <IconEdit className="icon" stroke={1.5} color="#c8b6ff" />
            }
            variant="filled"
            name="Edit"
            color="#6247aa"
            type="button"
            radius="md"
          />
        </div>
      </div>

      <Group my={"xl"}>
        <Avatar
          src={
            selectedImage
              ? selectedImage.toString()
              : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          }
          radius="xl"
          size={"xl"}
        />

        <div className="flex items-center flex-col gap-3">
          <PrimaryButton
            variant="filled"
            name="Change Photo"
            radius="md"
            type="button"
            size="sm"
            loading={isLoading}
            onClick={() => avatarRef.current && avatarRef.current.click()}
          />
          <input
            type="file"
            name=""
            hidden
            id=""
            ref={avatarRef}
            onChange={handleImageUpload}
          />
          {/* <PrimaryButton
            variant="outline"
            color="red"
            name="Remove Photo"
            radius="md"
            type="button"
            size="sm"
          /> */}
        </div>
      </Group>

      <div className="my-12">
        <EmployeeStat />
      </div>

      <div className="mt-7">
        <Tab defaultValue="personal_info" tabs={tabs} />
      </div>
    </div>
  );
};
