import { GenericDialog, IGenericDialog } from "@atoms";
import { Box, Typography } from "@mui/material";
import { AlertIcon } from "public/icons";
import React from "react";

export const LinkExpiredModal = ({ open, setOpen }: IGenericDialog) => {
  return (
    <GenericDialog size="460px" open={open} setOpen={setOpen}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AlertIcon />
        <Typography textAlign="center" variant="h3" mt={3}>
          Link Expired
        </Typography>
        <Typography
          textAlign="center"
          fontSize={20}
          fontWeight={500}
          color={(theme) => theme.palette.secondary.light}
          mt={2}
        >
          The reset password link has been expired.
        </Typography>
      </Box>
    </GenericDialog>
  );
};
