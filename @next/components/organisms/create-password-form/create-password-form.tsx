"use client";
import {
  ControlledTextField,
  ErrorMessage,
  FormProvider,
  TableLoader,
} from "@atoms";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createPasswordInitialValue,
  createPasswordFormSchema,
} from "./create-password-schema";
import type { ICreatePasswordForm } from "./create-password-form.type";
import { LoadingButton } from "@mui/lab";
import { LinkExpiredModal, PasswordUpdatedSuccessModal } from "@molecules";
import { useSearchParams } from "next/navigation";
import { useSetNewPasswordMutation, useVerifyTokenMutation } from "@services";
import toast from "react-hot-toast";

export const CreatePasswordForm = () => {
  const searchParam = useSearchParams();
  const token = searchParam.get("token");
  const [linkExpired, setLinkExpired] = React.useState(false);

  const [verifyToken, { isError, isLoading }] = useVerifyTokenMutation();
  const [
    mutation,
    { isError: isChangePasswordError, isLoading: changePasswordLoading },
  ] = useSetNewPasswordMutation();

  React.useEffect(() => {
    const tokenVerifyRequest = async () => {
      if (token) {
        try {
          const result = await verifyToken(token).unwrap();
        } catch (error: any) {
          setLinkExpired(true);
        }
      }
    };
    tokenVerifyRequest();
  }, [token]);

  const [open, setOpen] = React.useState(false);
  const method = useForm<ICreatePasswordForm>({
    resolver: yupResolver(createPasswordFormSchema),
    defaultValues: createPasswordInitialValue,
    mode: "onChange",
  });
  const { handleSubmit, watch, trigger, reset } = method;

  React.useEffect(() => {
    if (watch("Password")) {
      trigger("ConfirmPassword");
    }
    if (watch("ConfirmPassword")) {
      trigger("Password");
    }
  }, [watch("Password"), watch("ConfirmPassword")]);

  async function formSubmitHandler(
    payload: ICreatePasswordForm
  ): Promise<void> {
    if (token) {
      try {
        const result = await mutation({ body: payload, token }).unwrap();
        setOpen(true);
        reset();
      } catch (error: any) {
        toast.error(error?.data?.message ?? "something went wrong", {
          style: {
            color: "black",
            background: "rgba(188, 176, 244, 0.9)",
          },
        });
      }
    }
  }
  if (isLoading) return <TableLoader />;
  return (
    <FormProvider methods={method} onSubmit={handleSubmit(formSubmitHandler)}>
      <Stack spacing={5}>
        <ControlledTextField
          name="Password"
          type="password"
          outerLabel="Password"
          placeholder="Enter password"
        />
        <ControlledTextField
          name="ConfirmPassword"
          type="password"
          outerLabel="Confirm Password"
          placeholder="Enter password"
        />
        <Box>
          <LoadingButton
            loading={changePasswordLoading}
            type="submit"
            variant="contained"
            sx={{ fontWeight: 400, mt: 8, width: "100%" }}
          >
            Reset Password
          </LoadingButton>
        </Box>
        <PasswordUpdatedSuccessModal open={open} setOpen={setOpen} />
        <LinkExpiredModal open={linkExpired} />
      </Stack>
    </FormProvider>
  );
};
