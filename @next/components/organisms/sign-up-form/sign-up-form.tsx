import { ControlledTextField, FormProvider } from "@atoms";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema, signUpInitialValue } from "./sign-up-schema";
import type { ISignUpForm } from "./sign-up-form.type";
import Link from "next/link";
import { GoogleLogo } from "public/icons";
import { LoadingButton } from "@mui/lab";
import { GUEST_PATH } from "@routes";
import { useSignUpMutation } from "@services";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export const SignUpForm = () => {
  const [mutation, { isLoading }] = useSignUpMutation();
  const searchParam = useSearchParams();
  const referralCode = searchParam.get("referralCode");
  const { push } = useRouter();
  const method = useForm<ISignUpForm>({
    resolver: yupResolver(signUpFormSchema),
    defaultValues: signUpInitialValue,
    mode: "onChange",
  });

  const { handleSubmit, trigger, watch, setValue } = method;
  React.useEffect(() => {
    if (referralCode) {
      setValue("ReferredBy", referralCode);
    }
  }, [referralCode]);

  React.useEffect(() => {
    if (watch("password")) {
      trigger("confirmPassword");
    }
    if (watch("confirmPassword")) {
      trigger("password");
    }
  }, [watch("password"), watch("confirmPassword")]);

  async function formSubmitHandler(payload: ISignUpForm): Promise<void> {
    try {
      const result = await mutation({
        ...payload,
      }).unwrap();
      toast.success(result?.message || "Code sent!", {
        style: {
          color: "black",
          background: "rgba(188, 176, 244, 0.9)",
        },
      });
      push(
        `${GUEST_PATH?.otpVerification}?email=${payload.email}&password=${payload?.password}&ReferredBy=${payload?.ReferredBy}&countryCode=${payload?.countryCode}&role=${payload?.role}&confirmPassword=${payload?.confirmPassword}`
      );
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong", {
        style: {
          color: "black",
          background: "rgba(188, 176, 244, 0.9)",
        },
      });
    }
  }

  return (
    <FormProvider methods={method} onSubmit={handleSubmit(formSubmitHandler)}>
      <Stack spacing={3}>
        <ControlledTextField
          name="email"
          type="email"
          outerLabel="Email"
          placeholder="Enter your email"
        />
        <ControlledTextField
          name="password"
          type="password"
          outerLabel="Password"
          placeholder="Enter password"
        />
        <ControlledTextField
          name="confirmPassword"
          type="password"
          outerLabel="Confirm Password"
          placeholder="Confirm Password"
        />
        <ControlledTextField
          name="ReferredBy"
          type="text"
          outerLabel="Referral Code (Optional)"
          placeholder="Add referral code here"
        />
        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ fontWeight: 400 }}
        >
          Sign up
        </LoadingButton>
        <Button variant="light" sx={{ fontWeight: 400 }}>
          <Box component="span" mr="8px" sx={{ display: "flex" }}>
            <GoogleLogo />
          </Box>
          Sign up with Google
        </Button>
        <Link
          href={GUEST_PATH.signIn}
          style={{
            fontWeight: 400,
            textDecoration: "none",
            color: "#717184",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Already have an account?
          <Typography
            fontWeight={500}
            component="span"
            color="primary.main"
            sx={{
              pl: "7px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#5235E8",
            }}
          >
            Sign in
          </Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
};
