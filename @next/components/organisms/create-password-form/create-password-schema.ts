import type { ICreatePasswordForm } from "./create-password-form.type";
import * as yup from "yup";

export const createPasswordInitialValue: ICreatePasswordForm = {
  Password: "",
  ConfirmPassword: "",
};
export const createPasswordFormSchema = yup.object().shape({
  Password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?:{}|<>\/\[\]~])([a-zA-Z0-9!@#$%^&*(),.?:{}|<>\/\[\]~]{8,16})$/,
      "Password does not meet requirement"
    ),
  ConfirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("Password")], "Passwords does not match"),
});
