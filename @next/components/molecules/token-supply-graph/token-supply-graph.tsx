import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { tokenSupplyData, tokenSupplyOptions } from "./token-supply-graph.data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const TokenSupplyGraph = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2.8,
        backgroundColor: (theme) => theme.palette.common.white,
        borderRadius: 2.5,
        boxShadow: 1,
      }}
    >
      <Typography fontSize={28} fontWeight={600} mb={2.8}>
        Token Supply/Release Schedule
      </Typography>
      <Box
        mt={1}
        maxHeight={430}
        width="100%"
        display="flex"
        justifyContent={"center"}
      >
        <Line options={tokenSupplyOptions as any} data={tokenSupplyData} />
      </Box>
    </Box>
  );
};
