"use client";
import { ControlledTextField, FormProvider } from "@atoms";
import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  forgotPasswordInitialValue,
  forgotPasswordFormSchema,
} from "./forgot-password.schema";
import type { IForgotPasswordForm } from "./forgot-password-form.type";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { ResetLinkModal } from "@molecules";
import { GUEST_PATH } from "@routes";
import { useForgotPasswordMutation } from "@services";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

export const ForgotPasswordForm = () => {
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  const [mutation, { isLoading }] = useForgotPasswordMutation();
  const [open, setOpen] = React.useState(false);
  const [time, setTime] = useState<null | number>(null);
  const [showTimer, setShowTimer] = React.useState(false);
  const method = useForm<IForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordFormSchema),
    defaultValues: forgotPasswordInitialValue,
    mode: "onChange",
  });
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (time) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      console.log("Timer reached 0! Show your message here.");
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  const {
    handleSubmit,
    reset,
    watch,
    formState: { isDirty },
  } = method;
  async function formSubmitHandler(
    payload: IForgotPasswordForm
  ): Promise<void> {
    try {
      const result = await mutation({
        ...payload,
      }).unwrap();
      setOpen(true);
      setTime(30);
      setShowTimer(true);
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong", {
        style: {
          color: "black",
          background: "rgba(188, 176, 244, 0.9)",
        },
      });
    }
  }
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const resendHandler = async () => {
    try {
      const result = await mutation({
        email: watch("email"),
      }).unwrap();
      setOpen(true);
      setTime(30);
      setShowTimer(true);
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong", {
        style: {
          color: "black",
          background: "rgba(188, 176, 244, 0.9)",
        },
      });
    }
  };
  return (
    <FormProvider methods={method} onSubmit={handleSubmit(formSubmitHandler)}>
      <Stack spacing={3}>
        <ControlledTextField
          name="email"
          type="email"
          outerLabel="Email"
          placeholder="Enter your email"
        />
        <LoadingButton
          type="submit"
          variant="contained"
          sx={{ fontWeight: 400 }}
        >
          Send
        </LoadingButton>
        <Button
          disabled={time === null || time > 0 ? true : false}
          variant="text"
          sx={{
            color: "primary.main",
            fontWeight: 400,
            "&.Mui-disabled": {
              color: `#9C9CAB`,
            },
          }}
          onClick={resendHandler}
        >
          Resend Email
        </Button>
        {showTimer && (
          <Typography
            variant="h5"
            sx={{
              mt: "35px",
              color: "secondary.light",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Expire in:
            <Typography
              variant="h5"
              pl={0.5}
              component="span"
              sx={{ color: "error.main" }}
            >
              {time ? formatTime(time) : "00:00"}
            </Typography>
          </Typography>
        )}

        <Link
          href={GUEST_PATH.signIn}
          style={{
            textDecoration: "none",
            color: "#717184",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
            marginTop: "36px",
          }}
        >
          Remember password?
          <Typography
            fontWeight={500}
            component="span"
            color="primary.main"
            sx={{ pl: "7px" }}
          >
            Sign in
          </Typography>
        </Link>
        <ResetLinkModal open={open} setOpen={setOpen} />
      </Stack>
    </FormProvider>
  );
};
