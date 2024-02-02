import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { epochImage, novaImage } from "public/images";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

export const PlayLottery = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  return (
    <Box
      sx={{
        position: "relative",
        // background: (theme) => theme.palette.common.gradientSecondary,
        backgroundImage: `url('/images/play-lottery-bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box
        px={1}
        sx={{
          margin: "0 auto",
          maxWidth: matches ? "82rem" : "70rem",
          pt: { xl: 8, lg: 8, md: 8, sm: 5, xs: 2 },
        }}
      >
        {" "}
        <Typography
          variant="h3"
          color="secondary.main"
          textAlign="center"
          mb={2}
        >
          Play lottery and win prizes
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          color="secondary.light"
          textAlign="center"
        >
          Discover the excitement of our lottery games, Nova and Epoch. <br />{" "}
          Your ticket to full access! Explore jackpots, winning numbers,
          upcoming draws, new games, and more. Join the thrill now!
        </Typography>
        <Grid container mt={7} pb={15.5} spacing={2.5}>
          <Grid
            item
            xs={12}
            md={6}
            m="auto"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                src={epochImage}
                alt="play_comming_soon"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            <Box
              sx={{
                borderRadius: "20px",
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                src={novaImage}
                alt="play_comming_soon"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
