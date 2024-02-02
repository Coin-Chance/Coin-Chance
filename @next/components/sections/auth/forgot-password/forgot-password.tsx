"use client";
import { AuthCard } from "@atoms";
import { Box, Typography } from "@mui/material";
import { ForgotPasswordForm } from "@organisms";
import React from "react";

export const ForgotPassword = () => {
  return (
    <React.Fragment>
      <AuthCard maxWidth="600px">
        <Box py={2}>
          <Box mb={5.75} mx={5}>
            <Typography variant="h4" color="secondary.main">
              Enter your registered email
            </Typography>
            <Typography
              variant="body2"
              fontWeight={600}
              color="secondary.light"
              mt="8px"
              textAlign="center"
            >
              Enter your registered email address and we will send you a link to
              reset your password.
            </Typography>
          </Box>
          <ForgotPasswordForm />
        </Box>
      </AuthCard>
    </React.Fragment>
  );
};
