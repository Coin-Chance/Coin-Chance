import { Box } from "@mui/material";
import React from "react";
import { IAuthCardProps } from "./auth-card.types";

export const AuthCard = ({ children, headings, maxWidth }: IAuthCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        overflowY: "auto",
        py: { xl: 5.4, lg: 5, md: 5, sm: 5, xs: 5 },
      }}
    >
      <Box sx={{ minWidth: "600px", maxWidth }}>
        {headings && (
          <Box textAlign="center" mb="40px">
            {headings}
          </Box>
        )}
        <Box
          sx={{
            background: "white",
            borderRadius: "16px",
            py: "25px",
            px: "48px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
