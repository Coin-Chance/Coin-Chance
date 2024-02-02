"use client";
import { AuthCard } from "@atoms";
import { Box, Typography } from "@mui/material";
import { SignInForm } from "@organisms";
import React from "react";


export const SignIn = () => {
  const headings = (
    <React.Fragment>
      <Typography variant="h2" color="secondary.main">
        Sign in to CoinChance
      </Typography>
      <Typography variant="h5" color="secondary.light" mt="4px">
        We are glad you’re back!
      </Typography>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AuthCard headings={headings}>
        <Box py={2}>
          <SignInForm />
        </Box>
      </AuthCard>
    </React.Fragment>
  );
};
