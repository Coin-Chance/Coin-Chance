import { ControlledTextField, FormProvider } from "@atoms";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInInitialValue, signInFormSchema } from "./sign-in-schema";
import type { ISignInForm } from "./sign-in-form.type";
import Link from "next/link";
import { GoogleLogo } from "public/icons";
import { LoadingButton } from "@mui/lab";
import { GUEST_PATH } from "@routes";
import { useSignInMutation } from "@services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export const SignInForm = () => {
  const { push } = useRouter();
  const [mutation, { isLoading }] = useSignInMutation();
  const method = useForm<ISignInForm>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: signInInitialValue,
    mode: "onChange",
  });

  const { handleSubmit } = method;
  async function formSubmitHandler(payload: ISignInForm): Promise<void> {
    try {
      await mutation(payload).unwrap();

      push(GUEST_PATH?.root);
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
        <Link
          href={GUEST_PATH.forgotPassword}
          style={{
            textDecoration: "none",
            color: "#5235E8",
            fontWeight: 600,
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          Forgot password?
        </Link>
        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ fontWeight: 400 }}
        >
          Sign in
        </LoadingButton>
        <Button variant="light" sx={{ fontWeight: 400 }}>
          <Box component="span" mr="8px" sx={{ display: "flex" }}>
            <GoogleLogo />
          </Box>
          Sign in with Google
        </Button>
        <Link
          href={GUEST_PATH.signUp}
          style={{
            textDecoration: "none",
            color: "#717184",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Don’t have an account already?
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
            Sign up now
          </Typography>
        </Link>
      </Stack>
    </FormProvider>
  );
};
