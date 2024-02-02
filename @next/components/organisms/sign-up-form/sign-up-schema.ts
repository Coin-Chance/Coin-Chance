import type { ISignUpForm } from "./sign-up-form.type";
import * as yup from "yup";

export const signUpInitialValue: ISignUpForm = {
  email: "",
  password: "",
  confirmPassword: "",
  ReferredBy: "",
  role: "USER",
  countryCode: "KR",
};

export const signUpFormSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?:{}|<>\/\[\]~])([a-zA-Z0-9!@#$%^&*(),.?:{}|<>\/\[\]~]{8,16})$/,
        "Password does not meet requirement"
      ),
    confirmPassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("password")], "Passwords does not match"),
    // ReferredBy: yup.string().matches(/\s/g, "invalid code"),
  })
  .required();
