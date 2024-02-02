import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutData, doughnutOptions } from "./charts.data";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const TokenAllocationDoughnutGraph = () => {
  const centeredText = {
    id: "centeredText",
    beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 32px 'Inter', sans-serif";
      (ctx.textAlign = "center"),
        (ctx.fillStyle = "#09091E"),
        ctx.fillText(
          "100M",
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y
        );
    },
  };
  return (
    <Box>
      <Typography fontSize={28} fontWeight={600} mb={2.8}>
        Token Allocation
      </Typography>
      <Box
        maxHeight={430}
        width="100%"
        display="flex"
        justifyContent={"center"}
      >
        <Doughnut
          data={doughnutData}
          options={doughnutOptions as any}
          plugins={[centeredText]}
        />
      </Box>
    </Box>
  );
};
