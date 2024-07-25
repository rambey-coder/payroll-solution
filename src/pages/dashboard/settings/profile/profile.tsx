import React, { useEffect, useRef, useState } from "react";
import { Group, Avatar } from "@mantine/core";
import { PrimaryButton, TxtInput } from "../../../../components";
import { useOutletContext } from "react-router-dom";
import { useGetProfileQuery } from "../../../../store/auth/api";

export const Profile = () => {
  const userDetailsString = sessionStorage.getItem("user_details");
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;
  const id = userDetails ? userDetails.id : null;

  const avatarRef = useRef<HTMLInputElement>(null);
  const [setPageName] = useOutletContext<any>();
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const { data } = useGetProfileQuery(id);
  const user = data?.data;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setPageName("Profile Details");
  }, []);
  return (
    <div className="w-2/5">
      <Group>
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
          <PrimaryButton
            variant="outline"
            color="red"
            name="Remove Photo"
            radius="md"
            type="button"
            size="sm"
          />
        </div>
      </Group>

      <div className="mt-16 mb-8 flex flex-col gap-4">
        <TxtInput
          name="firstName"
          label="First Name"
          value={userDetails?.first_name}
          readOnly
          className="w-full"
        />
        <TxtInput
          name="lastName"
          label="last Name"
          readOnly
          value={userDetails?.last_name}
          className="w-full"
        />
        <TxtInput
          name="email"
          label="Email"
          readOnly
          value={userDetails?.first_name}
          className="w-full"
        />
        <TxtInput
          name="phone"
          label="Phone"
          readOnly
          value={userDetails?.phone}
          className="w-full"
        />
        {/* <TxtInput
          name="country"
          label="Country"
          //   value={data?.first_name}
          className="w-full"
        /> */}
      </div>

      <PrimaryButton name="Save " variant="outline" type="button" />
    </div>
  );
};
