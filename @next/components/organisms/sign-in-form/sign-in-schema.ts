import type { ISignInForm } from "./sign-in-form.type";
import * as Yup from "yup";

export const signInInitialValue: ISignInForm = {
  email: "",
  password: "",
};
export const signInFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid email"),
  password: Yup.string().required("Password is required").min(2).max(15),
});
