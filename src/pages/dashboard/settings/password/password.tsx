import React, { useEffect } from "react";
import { PrimaryButton, TxtInput } from "../../../../components";
import { useForm } from "@mantine/form";
import { alert } from "../../../../utils";
import { useOutletContext } from "react-router-dom";
import { useChangePasswordMutation } from "../../../../store/auth";

export const Password = () => {
  const userDetailsString = sessionStorage.getItem("user_details");
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;
  const id = userDetails ? userDetails.id : null;

  const [changePassword, { isLoading, isSuccess, isError }] =
    useChangePasswordMutation();

  console.log(isSuccess, isError);

  const [setPageName] = useOutletContext<any>();
  useEffect(() => {
    setPageName("Password ");
  }, []);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      confirm_password: "",
    },

    validate: {
      password: (value) =>
        value.length > 5
          ? null
          : "Password should contain at least 6 characters",

      confirm_password: (value, values) =>
        value === values.password ? null : "Passwords do not match",
    },
  });

  return (
    <div className="w-full h-[80dvh] flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow w-[450px]">
        <h3 className="text-2xl font-bold mb-3">Change Password</h3>

        <form
          onSubmit={form.onSubmit(async (values) => {
            const payload = { password: values.confirm_password };
            form.validate();
            const isValid = form.isValid();
            if (isValid) {
              await changePassword({ id, payload });
            }
          })}>
          <div className="mb-4">
            <TxtInput
              label="Password"
              type="password"
              id="password"
              name="password"
              //   placeholder="example@mail.com"
              key={form.key("password")}
              {...form.getInputProps("password")}
              required
            />
          </div>
          <div className="mb-8">
            <TxtInput
              label="Confirm Password"
              type="password"
              id="confirm_password"
              name="confirm_password"
              //   placeholder="example@mail.com"
              key={form.key("confirm_password")}
              {...form.getInputProps("confirm_password")}
              required
            />
          </div>

          <PrimaryButton
            loading={isLoading}
            name="Save"
            type="submit"
            variant="outline"
          />
        </form>
      </div>
    </div>
  );
};
