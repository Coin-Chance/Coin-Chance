import React from "react";
import { Box } from "@mui/material";
import { NoContentIcon } from "public/icons";

export const NoContentFound = (): JSX.Element => {
  return (
    <Box display={"flex"}>
      <NoContentIcon />
    </Box>
  );
};
