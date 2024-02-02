import { TimerCountDown } from "@molecules";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import React from "react";

export const HomeHeader = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/header-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Stack
        pt={2}
        pb={6}
        px={1}
        spacing={4}
        display="flex"
        textAlign="center"
        alignItems="center"
      >
        <Typography
          fontWeight={700}
          color="secondary.main"
          sx={{
            fontSize: {
              xl: "3.25rem",
              lg: "3.25rem",
              md: "2.75rem",
              sm: "2.75rem",
              xs: "2rem",
            },
          }}
        >
          Chance for Change <br />
          Your Gateway to Cryptocurrency Fortune!
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          color="secondary.light"
          sx={{
            maxWidth: "55rem",
          }}
        >
          Experience the excitement of winning with CoinChance using Chance
          (CHN), while also making a difference by supporting orphan education
          worldwide.
        </Typography>
        <TimerCountDown days="01" hours="12" minutes="14" seconds="06" />
        <Typography variant="body1" fontWeight={600} color="error.main">
          ⏰ Hurry, Epoch not long left!
        </Typography>
        <Button sx={{ fontSize: 18 }} variant="contained">
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};
