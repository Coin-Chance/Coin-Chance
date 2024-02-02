import { GenericDialog, IGenericDialog } from "@atoms";
import { Box, Typography } from "@mui/material";
import { LockIcon } from "public/icons";
import React from "react";

export const ResetLinkModal = ({ open, setOpen }: IGenericDialog) => {
  return (
    <GenericDialog open={open} setOpen={setOpen}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockIcon />
        <Typography textAlign="center" variant="h3" mt={3}>
          Reset Link Sent!
        </Typography>
        <Typography
          textAlign="center"
          fontSize={20}
          fontWeight={500}
          color={(theme) => theme.palette.secondary.light}
          mt={2}
        >
          We have sent you the password reset link to your registered email
          address.
        </Typography>
      </Box>
    </GenericDialog>
  );
};
