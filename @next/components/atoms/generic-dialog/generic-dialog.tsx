import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IGenericDialog } from "./generic-dialog.types";
import { CloseIcon } from "public/icons";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export function GenericDialog({
  setOpen,
  open,
  children,
  dialogTitle,
  size = "460px",
  sx,
}: IGenericDialog) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen && setOpen(false);
      }}
      sx={{
        "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
          backgroundColor: "rgba(82,53,232,0.2)",
        },
        "& .MuiDialog-paper": {
          position: "relative",
          borderRadius: "20px",
          maxWidth: size,
          width: "100%",
          padding: "40px 15px 40px 15px",
        },
        ...sx,
      }}
      aria-labelledby="common_dialog"
      aria-describedby="common_dialog_description"
      fullScreen={fullScreen}
    >
      <Box
        onClick={() => {
          setOpen && setOpen(false);
        }}
        sx={{ position: "absolute", top: 15, right: 15, cursor: "pointer" }}
      >
        <CloseIcon />
      </Box>
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
