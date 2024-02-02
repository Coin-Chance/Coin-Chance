"use client";
import { BackdropLoader } from "@atoms";
import { LoadingButton } from "@mui/lab";
import { Box, FormHelperText, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input-rc-17";
import { useRouter, useSearchParams } from "next/navigation";
import { useOtpVerificationMutation, useSignUpMutation } from "@services";
import toast from "react-hot-toast";
import { GUEST_PATH } from "@routes";

export const OtpConfirmationForm = () => {
  const { push } = useRouter();
  const [mutation, { isLoading }] = useOtpVerificationMutation();
  const [signUpMutation, { isLoading: isSignUpLoading }] = useSignUpMutation();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const ReferredBy = searchParams.get("ReferredBy");
  const countryCode = searchParams.get("countryCode");
  const role = searchParams.get("role");
  const confirmPassword = searchParams.get("confirmPassword");

  const [error, setIsError] = React.useState<String | null>(null);

  const [otp, setOtp] = useState("");

  async function formSubmitHandler(): Promise<void> {
    const payload: any = {
      email,
      password,
      ReferredBy,
      countryCode,
      role,
      confirmPassword,
    };

    try {
      const result = await signUpMutation(payload).unwrap();
      toast.success(result?.message || "Code sent", {
        style: {
          color: "black",
          background: "rgba(188, 176, 244, 0.9)",
        },
      });
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong";
      toast.error(errorMessage, {
        style: {
          color: "black",
          background: "rgba(188, 176, 244, 0.9)",
        },
      });
    }
  }

  useEffect(() => {
    const inputChangeRequest = async () => {
      if (otp.length === 6 && email) {
        try {
          const result = await mutation({
            code: otp,
            email: email,
          }).unwrap();
          toast.success(result?.message || "Account Verified ");
          push(GUEST_PATH?.signIn);
        } catch (error: any) {
          setIsError(
            error?.data?.message ?? "Wrong OTP, Please enter correct OTP."
          );
        }
      }
    };
    inputChangeRequest();
  }, [otp]);
  return (
    <Stack spacing={8}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <OtpInput
          data-testid="otp-input"
          isInputNum
          hasErrored={error ? true : false}
          onChange={(e: any) => setOtp(e)}
          numInputs={6}
          errorStyle={{ border: "1px solid red" }}
          focusStyle={{
            outline: "none",
            border: "1px solid #5235E8",
            fontWeight: "800 !important",
          }}
          isDisabled={isLoading}
          separator={<Box component="span" mx={0.8}></Box>}
          inputStyle={{
            backgroundColor: "#fff",
            border: "1px solid #E7E3FC",
            borderRadius: "10px",
            width: 70,
            height: 70,
            fontSize: "36px",
            fontWeight: "500",
          }}
          value={otp}
        />
        {/* {error && } */}
        <FormHelperText
          sx={{ mt: "9px", textAlign: "start", color: "error.main" }}
        >
          {error}
        </FormHelperText>
        <BackdropLoader loading={isLoading} />
      </Box>
      <LoadingButton
        variant="contained"
        sx={{ fontWeight: 400 }}
        onClick={formSubmitHandler}
        loading={isSignUpLoading}
      >
        Didn’t get a code? Resend
      </LoadingButton>
    </Stack>
  );
};
