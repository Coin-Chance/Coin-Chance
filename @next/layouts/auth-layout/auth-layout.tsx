"use client";
import { Box } from "@mui/material";
import React from "react";
import { TopNavBar } from "./top-navbar";
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/background-image.png')`,
        // height: "100%",
        minHeight: {
          xl: "100vh",
          lg: "100vh",
          md: "100%",
          sm: "100%",
          xs: "100%",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box px={1}>
        <TopNavBar />
      </Box>
      <Box sx={{ py: { xl: 0, lg: 0, md: 0, sm: 0, xs: 2 } }}>{children}</Box>
    </Box>
  );
}
