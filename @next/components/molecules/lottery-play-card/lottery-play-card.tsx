import { Box, Typography } from "@mui/material";
import { FlameIcon } from "public/icons";
import React from "react";

export const LotteryPlayCard = () => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.common.white,
        borderRadius: "20px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle1" color="secondary.main">
          No. 986076
        </Typography>
        <Typography variant="subtitle1" color="secondary.main">
          <FlameIcon /> Popular
        </Typography>
      </Box>
      <Box>
        []
        <Box
          width={74}
          height={74}
          borderRadius="100%"
          sx={{
            background: (theme) => theme.palette.common.white,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize="26px" fontWeight={700}>
            12
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
