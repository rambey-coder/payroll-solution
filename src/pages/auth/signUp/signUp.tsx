import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { PrimaryButton, TxtInput } from "../../../components";
import { useSignUpMutation } from "../../../store/auth";
import { alert } from "../../../utils";

export const SignUp = () => {
  const navigate = useNavigate();
  const [signUp, { data, isError, isLoading, isSuccess }] = useSignUpMutation();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      first_name: (value) =>
        value.length > 1 ? null : "First name is required",
      last_name: (value) => (value.length > 1 ? null : "Last name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone_number: (value) =>
        value.length > 10 ? null : "Phone number is required",
      password: (value) =>
        value.length > 5
          ? null
          : "Password should contain at least 6 characters",
      confirmPassword: (value, form) =>
        value === form.password ? null : "Passwords do not match",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      alert.success("Account created sucessfully");
      navigate("/");
    }
    if (isError) {
      alert.error("An Error Occured" || data?.message);
      console.log(isError);
    }
  }, [isSuccess, data, isError]);

  console.log("err", isError, "load", isLoading, "succ", isSuccess, data);

  return (
    <div className="bg-[#e9ecef] h-[100vh] w-100 flex items-center justify-center">
      <div className="p-8 bg-white rounded-md w-[80%] max-w-[450px] mx-auto">
        <h1
          onClick={() => alert.success("yo!!")}
          className="text-[#9263f8] text-left text-3xl font-bold">
          Register
        </h1>
        <p className="text-[#626262] text-sm my-3">
          Welcome to HCM Payroll Solution System. Please enter your details to
          create an account.
        </p>
        <form
          className="mt-4"
          onSubmit={form.onSubmit(async (values) => {
            form.validate();
            const isValid = form.isValid();
            if (isValid) {
              try {
                await signUp(values);
              } catch (error) {
                console.log("error", error);
              }
            }
          })}>
          <div className="my-4 flex items-center justify-between gap-4">
            <TxtInput
              label="First Name"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="John Doe"
              required
              key={form.key("first_name")}
              {...form.getInputProps("first_name")}
            />

            <TxtInput
              label="Last Name"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="John Doe"
              required
              key={form.key("last_name")}
              {...form.getInputProps("last_name")}
            />
          </div>
          <div className="my-4 flex items-center justify-between gap-4">
            <TxtInput
              label="Email"
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              required
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <TxtInput
              label="Phone Number"
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="+234 123 456 7890"
              required
              key={form.key("phone_number")}
              {...form.getInputProps("phone_number")}
            />
          </div>

          <div className="mb-4">
            <TxtInput
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="*****"
              required
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
          </div>
          <div className="mb-6">
            <TxtInput
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="*****"
              required
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
            />
          </div>
          <div className="mb-4">
            <PrimaryButton
              type="submit"
              variant="filled"
              name="Register"
              fullWidth
              radius="md"
              loading={isLoading}
            />
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-[#626262]">
            Already have an account?{" "}
            <Link to="/" className="text-[#9263f8] font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
