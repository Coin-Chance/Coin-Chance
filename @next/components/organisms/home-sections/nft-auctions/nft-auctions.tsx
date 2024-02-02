import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { AuctionCard } from "@molecules";
import { mockAuctionData } from "./nft-auction.data";
import useMediaQuery from "@mui/material/useMediaQuery";
import EastIcon from "@mui/icons-material/East";
import { fireImage } from "public/images";
import Image from "next/image";

export const NftAuctions = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  return (
    <Box
      sx={{
        pt: { xl: 8, lg: 8, md: 8, sm: 5, xs: 5 },
        pb: { xl: 23.5, lg: 23.5, md: 23.5, sm: 10, xs: 8 },
        backgroundImage: `url('/images/top-auction-bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: matches ? "82rem" : "70rem",
          padding: "0 0.5rem",
        }}
      >
        <Grid container>
          <Grid item xl={10} lg={10} md={8} sm={12} xs={12}>
            <Typography variant="h3" mb={2} sx={{ display: "flex", gap: 1.5 }}>
              <Image src={fireImage} alt="fire_img" /> Top NFT Auctions
            </Typography>
            <Typography variant="h6" fontWeight={500} mt="4px" color="#717184">
              Dive into a world of digital creativity with our NFT Auctions.
              Participate now to bid, earn rewards, and own exclusive digital
              artworks.
            </Typography>
          </Grid>
          <Grid
            item
            xl={2}
            lg={2}
            md={4}
            sm={12}
            xs={12}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                alignItems: "center",
                border: "1px solid #5235E8",
                display: "flex",
                height: "52px",
                fontSize: "1.125rem",
                fontWeight: 600,
                justifyContent: "center",
                width: "162px",
                "& svg": {
                  ml: "1rem",
                },
              }}
            >
              View All <EastIcon />
            </Button>
          </Grid>
        </Grid>

        <Box mt={8.87}>
          <Grid container spacing={2.5}>
            {mockAuctionData?.map(
              ({ image, amount, id, enterData, name, hours }) => (
                <Grid key={id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <AuctionCard
                    image={image}
                    amount={amount}
                    id={id}
                    enterData={enterData}
                    name={name}
                    hours={hours}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
