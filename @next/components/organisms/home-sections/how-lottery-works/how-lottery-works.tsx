import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { mockLoterryWorksData } from "./lottery-works.data";
import useMediaQuery from "@mui/material/useMediaQuery";

export const HowLotteryWorks = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.common.gradientSecondary,
        px: 1,
        py: { xl: 13.75, lg: 13.75, md: 10, sm: 6, xs: 3 },
      }}
    >
      <Box sx={{ margin: "0 auto", maxWidth: matches ? "82rem" : "70rem" }}>
        <Grid container spacing={2.5}>
          <Grid xs={12} md={6} item sx={{ margin: "3rem 0 0" }}>
            <Stack spacing={4}>
              <Typography variant="h3" color="secondary.main">
                How Lottery for Orphan works?
              </Typography>
              {mockLoterryWorksData?.map(({ id, label, description }) => (
                <Box
                  key={id}
                  sx={{
                    maxWidth: "35rem",
                  }}
                >
                  <Typography variant="h5" color="secondary.main">
                    {label}
                  </Typography>
                  <Typography variant="body1" color="secondary.light">
                    {description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid xs={12} md={6} item>
            <Stack spacing={4}>
              <Typography variant="h3" color="secondary.main">
                Join the Cause
              </Typography>
              {mockLoterryWorksData?.map(({ id, label, description }) => (
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "20px",
                    p: 3,
                    color: (theme) => theme.palette.common.white,
                    maxWidth: "31.7rem",
                  }}
                  key={id}
                >
                  <Typography fontSize={20} fontWeight={600}>
                    {label}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              ))}
              <Typography
                variant="body1"
                color="error.main"
                sx={{
                  maxWidth: "35rem",
                }}
              >
                <Typography component="span" color="secondary.main">
                  Disclaimer:
                </Typography>{" "}
                CoinChance reserves the right to adjust the percentage
                allocation based on evolving needs and circumstances.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
