import { CustomTable } from "@molecules";
import React, { useMemo } from "react";
import { tokenAllocationMockData } from "./token-allocation.data";
import { Box, Typography } from "@mui/material";

export const TokenAllocationDetail = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row: any) => row?.detail,
        id: "detail_allocation",
        cell: (info: any) => info.getValue(),
        header: () => (
          <Typography component="span">Details of Allocation</Typography>
        ),
      },
      {
        accessorFn: (row: any) => row?.initialSupply ?? "--",
        id: "initial_supply",
        cell: (info: any) => info.getValue(),
        header: () => <Typography component="span">Initial Supply</Typography>,
      },
      {
        accessorFn: (row: any) => row.reserved,
        id: "reserved",
        cell: (info: any) => info.getValue(),
        header: () => <Typography component="span">Reserved</Typography>,
      },
      {
        accessorFn: (row: any) =>
          row?.tenPercent === "0" ? (
            "0"
          ) : (
            <Box
              sx={{
                m: "auto",
                width: "fit-content",
                background: (theme) => theme.palette.common.lightGreen,
                py: 1,
                px: 1.5,
                borderRadius: "20px",
              }}
            >
              {row?.tenPercent}
            </Box>
          ),
        id: "ten_percent",
        cell: (info: any) => info.getValue(),
        header: () => <Typography component="span">10%</Typography>,
      },
      {
        accessorFn: (row: any) =>
          row?.fivePercent === "0" ? (
            "0"
          ) : (
            <Box
              sx={{
                m: "auto",
                width: "fit-content",
                background: (theme) => theme.palette.common.lightYellow,
                py: 1,
                px: 1.5,
                borderRadius: "20px",
              }}
            >
              {row?.fivePercent}
            </Box>
          ),
        id: "five_percent",
        cell: (info: any) => info.getValue(),
        header: () => <Typography component="span">5%</Typography>,
      },
      {
        accessorFn: (row: any) => row?.circulationSupply ?? "--",
        id: "circulation_supply",
        cell: (info: any) => info.getValue(),
        header: () => (
          <Typography component="span">Circulation Supply</Typography>
        ),
      },
      {
        accessorFn: (row: any) => row?.totalSupply ?? "--",
        id: "total_supply",
        cell: (info: any) => info.getValue(),
        header: () => <Typography component="span">Total Supply</Typography>,
      },
      {
        accessorFn: (row: any) => row?.month ?? "--",
        id: "month",
        cell: (info: any) => info.getValue(),
        header: () => (
          <Typography component="span">Months (18 Months)</Typography>
        ),
      },
    ],
    []
  );
  return (
    <Box
      sx={{
        p: 4,
        background: (theme) => theme.palette.common.white,
        borderRadius: "20px",
      }}
    >
      <Typography fontSize={28} fontWeight={600} mb={4}>
        Token Allocation Details
      </Typography>
      <CustomTable
        minHeight={630}
        isPagination={false}
        data={tokenAllocationMockData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
      />
    </Box>
  );
};
