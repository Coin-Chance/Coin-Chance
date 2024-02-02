import type { IForgotPasswordForm } from "./forgot-password-form.type";
import * as Yup from "yup";

export const forgotPasswordInitialValue: IForgotPasswordForm = {
  email: "",
};
export const forgotPasswordFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid email"),
});
