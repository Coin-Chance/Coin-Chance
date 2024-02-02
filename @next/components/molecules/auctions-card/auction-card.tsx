import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { auctionOneImage } from "public/images";
import React from "react";
import { IAuctionCard } from "./auction-card.types";

export const AuctionCard = (props: IAuctionCard) => {
  const { image, amount, id, enterData, hours, name } = props;
  return (
    <React.Fragment>
      <Box
        width="85%"
        height={230}
        borderRadius={1.5}
        sx={{
          boxShadow: 2,
          m: "auto",
          position: "relative",
          mb: -5,
          borderRadius: "12px",
          overflow: "hidden",
          //   mx: 3,
        }}
      >
        <Image
          src={image ?? ""}
          alt="auction_image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            background: (theme) => theme.palette.common.white,
            px: 1.25,
            py: 0.6,
            borderRadius: "50px",
          }}
        >
          <Typography color="error.main" variant="subtitle2">
            {hours}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: (theme) => theme.palette.common.white,
          borderRadius: 2.5,
          px: 2.5,
          pt: 7.5,
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="secondary.light">
              {name}
            </Typography>
            <Typography
              fontSize={28}
              fontWeight={700}
              color="secondary.main"
              mt="8px"
            >
              {amount}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="secondary.light">
              {enterData} Entered
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                width: "100px",
                fontSize: "14px",
                p: 0,
                py: "6px",
                mt: "8px",
              }}
            >
              Enter Now
            </Button>
          </Box>
        </Box>
        <Typography
          component="div"
          fontWeight={600}
          variant="caption"
          color="secondary.main"
          textAlign="center"
          pt={2.25}
          pb={1}
        >
          {id}
        </Typography>
      </Box>
    </React.Fragment>
  );
};
