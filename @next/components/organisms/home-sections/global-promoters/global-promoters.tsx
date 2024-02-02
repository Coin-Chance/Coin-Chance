import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { mockGlobalPromoters } from "./global-promoters.data";
import useMediaQuery from "@mui/material/useMediaQuery";

export const GlobalPromoters = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url('/images/background-two.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box
        py={8}
        px={1}
        sx={{ margin: "0 auto", maxWidth: matches ? "82rem" : "70rem" }}
      >
        <Typography variant="h3" color="secondary.main" textAlign={"center"}>
          CoinChance Global Promoters: <br /> Unleashing Crypto Opportunities
          Worldwide
        </Typography>
        <Grid container rowSpacing={8} spacing={2.5} mt={10.12}>
          {mockGlobalPromoters?.map(({ id, label, description }) => (
            <Grid xs={12} md={6} item>
              {" "}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  height: 150,
                  boxShadow: 1,
                  px: 3.75,
                  background: (theme) => theme.palette.common.white,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  mt={-20}
                  sx={{
                    minWidth: "80px",
                    minHeight: "80px",
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontSize="26px"
                    fontWeight={700}
                    color={(theme) => theme.palette.common.white}
                  >
                    {id}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize={20}
                    fontWeight={600}
                    color="secondary.main"
                  >
                    {label}
                  </Typography>
                  <Typography mt={1.5} variant="body1" color="secondary.light">
                    {description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Typography
          mt={7.75}
          variant="body1"
          textAlign="center"
          color="error.main"
        >
          Ambassadors and Discord Roles will be disclosed on discord and
          telegram.
        </Typography>
      </Box>
    </Box>
  );
};
