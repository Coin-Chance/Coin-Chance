import { GenericDialog, IGenericDialog } from "@atoms";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { LockIcon, TickIcon } from "public/icons";
import React from "react";

export const PasswordUpdatedSuccessModal = ({
  open,
  setOpen,
}: IGenericDialog) => {
  const { push } = useRouter();
  return (
    <GenericDialog size={"460px"} open={open} setOpen={setOpen}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TickIcon />
        <Typography textAlign="center" variant="h3" mt={3}>
          Password Updated!
        </Typography>
        <Typography
          textAlign="center"
          fontSize={20}
          fontWeight={500}
          color={(theme) => theme.palette.secondary.light}
          mt={2}
        >
          Your password has been reset successfully.
        </Typography>

        <LoadingButton
          onClick={() => {
            push("/sign-in");
          }}
          type="submit"
          variant="contained"
          sx={{ fontWeight: 400, mt: 8, width: "100%", fontSize: "16px" }}
        >
          Back to Login
        </LoadingButton>
      </Box>
    </GenericDialog>
  );
};
