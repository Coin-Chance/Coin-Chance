import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { TokenAllocationDetail } from "./token-allocation-detail";
import { tokenDetail } from "./token-allocation-detail/token-allocation.data";
import {
  TokenAllocationDoughnutGraph,
  TokenReleaseGraph,
  TokenSupplyGraph,
} from "@molecules";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CoinChoiceTokenNomincs = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.common.gradientSecondary,
        py: 9.3,
      }}
    >
      <Box
        px={1}
        sx={{ margin: "0 auto", maxWidth: matches ? "82rem" : "70rem" }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          color="secondary.main"
          mb={2}
        >
          CoinChance Tokenomincs
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          textAlign="center"
          color="secondary.light"
        >
          Learn about Coin Chance tokenomics and view project details such as
          supply schedule, funding rounds, token allocation, and more.
        </Typography>
        <Grid my={4} container spacing={4}>
          <Grid item xs={12} md={6}>
            <TokenAllocationDoughnutGraph />
          </Grid>
          <Grid item xs={12} md={6} m="auto">
            <Typography variant="h5">
              Chance (CHN) - The Heart of the Game
            </Typography>
            <Typography
              mt={1.5}
              fontWeight={500}
              variant="h6"
              color="secondary.light"
            >
              CoinChance introduces its native cryptocurrency, Chance (CHN),
              designed to enhance your gaming experience and open new doors to
              rewards.
            </Typography>
            <Box
              sx={{
                borderRadius: 1.5,
                border: `1px solid ${theme.palette.common.lightOrange}`,
                p: 2.25,
                mt: 4.5,
              }}
            >
              <List>
                {tokenDetail?.map(({ label, name }) => (
                  <ListItem
                    sx={{
                      px: 0,
                      py: 0.2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      fontSize={20}
                      fontWeight={600}
                      color="secondary.light"
                    >
                      {label}
                    </Typography>
                    <Typography
                      fontSize={20}
                      fontWeight={600}
                      color="primary.main"
                    >
                      {name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Button variant="contained" sx={{ fontSize: 18, mt: 7 }}>
              Read more
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <TokenSupplyGraph />
          </Grid>
          <Grid item xs={12} md={6}>
            <TokenReleaseGraph />
          </Grid>
        </Grid>
        <TokenAllocationDetail />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" sx={{ fontSize: 18, mt: 7 }}>
            Read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
