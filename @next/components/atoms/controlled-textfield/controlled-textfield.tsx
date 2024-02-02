"use client";
// @mui

import {
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";

// form
import { Controller, useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ControlledTextFieldProps } from "./controlled-textfield.types";

// ----------------------------------------------------------------------

export function ControlledTextField<TFormValues extends FieldValues>({
  name,
  type = "text",
  variant = "outlined",
  readOnly = false,
  fullWidth,
  StartIcon,
  outerLabel,
  placeholder,
  EndIcon,
  ...other
}: ControlledTextFieldProps<TFormValues>): JSX.Element {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const endAdornment =
    type === "password" ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? (
            <VisibilityOutlinedIcon />
          ) : (
            <VisibilityOffOutlinedIcon />
          )}
        </IconButton>
      </InputAdornment>
    ) : (
      EndIcon
    );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack gap="0.4rem">
          {outerLabel && (
            <FormLabel sx={{ fontSize: "0.875rem" }}>{outerLabel}</FormLabel>
          )}
          <TextField
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
            type={showPassword ? "text" : type}
            variant={variant}
            placeholder={placeholder}
            InputProps={{
              readOnly,
              endAdornment,
              startAdornment: StartIcon,
            }}
            fullWidth={fullWidth}
            {...other}
          />
        </Stack>
      )}
    />
  );
}
