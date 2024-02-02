import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { MailBoxIcon } from "public/icons";
import { patternIcon } from "public/images";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ContactUs = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  return (
    <Box
      bgcolor={"white"}
      sx={{
        pt: { xl: 14, lg: 14, md: 10, sm: 7, xs: 5 },
        pb: { xl: 8, lg: 8, md: 8, sm: 5, xs: 2 },
        px: "0.5rem",
      }}
    >
      <Box
        py={8}
        px={2}
        sx={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "secondary.main",
          position: "relative",
          borderRadius: 3,
          margin: "0 auto",
          maxWidth: matches ? "82rem" : "70rem",
          "& h3": {
            position: "relative",
            textAlign: "center",
            zIndex: 1,
          },
        }}
      >
        <Image
          src={patternIcon}
          alt="pattern_design"
          style={{ position: "absolute", left: 0, bottom: 0, zIndex: 0 }}
        />
        <Typography variant="h3" color={(theme) => theme.palette.common.white}>
          Can’t find what you’re looking for?
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 5, fontSize: 16, width: 168, height: 46 }}
        >
          <MailBoxIcon sx={{ mr: 1, mt: 1 }} /> Contact Us
        </Button>
      </Box>
    </Box>
  );
};
