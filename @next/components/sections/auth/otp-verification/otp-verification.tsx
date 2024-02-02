"use client";

import { AuthCard, GenericDialog } from "@atoms";
import { Box, Typography } from "@mui/material";
import { EmailSentIcon } from "public/icons";
import React from "react";
import { OtpConfirmationForm } from "@organisms";

export const OtpVerification = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <AuthCard maxWidth="600px">
        <Box py={2}>
          <Box mb={5.75} mx={5} textAlign="center">
            <EmailSentIcon />
            <Typography mt={3.875} variant="h2" color="secondary.main">
              Enter OTP
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              color="secondary.light"
              mt="8px"
            >
              Please enter one-time password that has been sent to your email.
            </Typography>
          </Box>
          <GenericDialog open={open} setOpen={setOpen}>
            value defined
          </GenericDialog>
          <OtpConfirmationForm />
        </Box>
      </AuthCard>
    </React.Fragment>
  );
};
