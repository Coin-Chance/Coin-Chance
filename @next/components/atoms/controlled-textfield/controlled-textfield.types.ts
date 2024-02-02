import { ReactNode } from "react";
import type { FieldValues, Path } from "react-hook-form";

export interface ControlledTextFieldProps<FormValues extends FieldValues> {
  name: Path<FormValues>;
  type?: string;
  label?: string;
  readOnly?: boolean;
  fullWidth?: boolean;
  StartIcon?: ReactNode;
  placeholder?: string;
  outerLabel?: string;
  EndIcon?: ReactNode;
  variant?: "outlined" | "standard" | "filled";
}
