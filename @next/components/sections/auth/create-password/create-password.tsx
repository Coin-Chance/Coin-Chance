"use client";

import React from "react";
import { CreatePasswordForm } from "@organisms";
import { Box, Typography } from "@mui/material";
import { AuthCard } from "@atoms";

export const CreatePassword = () => {
  return (
    <React.Fragment>
      <AuthCard maxWidth="600px">
        <Box py={4}>
          <Typography
            mb={8}
            variant="h4"
            color="secondary.main"
            sx={{ textAlign: "center" }}
          >
            Create New Password
          </Typography>
          <CreatePasswordForm />
        </Box>
      </AuthCard>
    </React.Fragment>
  );
};
