import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { PrimaryButton, TxtInput } from "../../../components";
import { useLoginMutation } from "../../../store/auth";
import { alert } from "../../../utils";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../store/auth/authSlice";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation();

  console.log("err", isError, "load", isLoading, "succ", isSuccess, data);

  useEffect(() => {
    if (data && isSuccess) {
      const { user, token } = data.userDetails;

      dispatch(setUserDetails({ user, token }));

      navigate("/dashboard/overview");

      alert.success("Login Successful");
    }
  }, [data, isSuccess]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 5
          ? null
          : "Password should contain at least 6 characters",
    },
  });

  return (
    <div className="bg-[#e9ecef] h-[100vh] w-100 flex items-center justify-center">
      <div className="p-8 bg-white rounded-md w-[80%] max-w-[400px] mx-auto">
        <h1 className="text-[#0C2D48] text-left text-3xl font-bold">Sign In</h1>
        <p className="text-[#626262] my-3">
          Please enter your details to sign in.
        </p>
        <form
          className="mt-4"
          onSubmit={form.onSubmit(async (values) => {
            form.validate();
            const isValid = form.isValid();
            if (isValid) {
              await login(values);
            }
          })}>
          <div className="mb-4">
            <TxtInput
              label="Email"
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
              required
            />
          </div>
          <div className="mb-4">
            <TxtInput
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="*****"
              key={form.key("password")}
              {...form.getInputProps("password")}
              required
            />
          </div>

          <div className="mb-4">
            <PrimaryButton
              type="submit"
              variant="filled"
              name="Sign In"
              fullWidth
              radius="md"
              loading={isLoading}
            />
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-[#626262]">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-[#970C10] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
