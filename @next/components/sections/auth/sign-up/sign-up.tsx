"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { SignUpForm } from "@organisms";
import { AuthCard } from "@atoms";

export const SignUp = () => {
  const headings = (
    <React.Fragment>
      <Typography variant="h2" color="secondary.main">
        Sign up to CoinChance
      </Typography>
      <Typography variant="h5" color="secondary.light" mt="4px">
        Sign up to your new coinchance account.
      </Typography>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AuthCard headings={headings}>
        <SignUpForm />
      </AuthCard>
    </React.Fragment>
  );
};
