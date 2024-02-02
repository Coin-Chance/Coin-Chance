import { Box, Button, Typography } from "@mui/material";
import { AlertIcon } from "public/icons";
import React from "react";
import { IErrorMessage } from "./error.type";
import { GUEST_PATH } from "@routes";
import { useRouter } from "next/navigation";

export const ErrorMessage = ({ label, description }: IErrorMessage) => {
  const { push } = useRouter();
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AlertIcon />
      <Typography textAlign="center" variant="h3" mt={3}>
        {label}
      </Typography>
      {description && (
        <Typography
          textAlign="center"
          fontSize={20}
          fontWeight={500}
          color={(theme) => theme.palette.secondary.light}
          mt={4}
        >
          {description}
        </Typography>
      )}

      <Button
        variant="contained"
        onClick={() => {
          push(GUEST_PATH.root);
        }}
        sx={{ mt: 6 }}
      >
        Go to home
      </Button>
    </Box>
  );
};
