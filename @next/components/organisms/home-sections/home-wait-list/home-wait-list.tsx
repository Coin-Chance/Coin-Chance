import { Box, Button, Stack, Typography } from "@mui/material";
import { GUEST_PATH } from "@routes";
import { useGetReferralsQuery } from "@services";
import { useSelector } from "@store";
import { useRouter } from "next/navigation";
import { CoinIcon, CoinIconTwo, PeopleIcon } from "public/icons";
import React from "react";

export const HomeWaitList = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const { data, error, isLoading } = useGetReferralsQuery({});

  const { push } = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url('/images/background-two.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Stack py={8} spacing={4} px={1} alignItems="center" textAlign="center">
        <PeopleIcon />
        <CoinIcon sx={{ position: "absolute", left: "20%", top: "20%" }} />
        <CoinIconTwo sx={{ position: "absolute", right: "25%", top: 50 }} />
        <Typography variant="h3" color="secondary.main">
          Join waitlist Refer a friend, multiply <br /> your joy – every
          referral counts in CoinChance!
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          color="secondary.light"
          sx={{
            maxWidth: "53rem",
          }}
        >
          Direct invites score you 10 points each for airdrop, while earning 5
          points for every friend brought in indirectly – maximize your rewards
          through your network with CoinChance.
        </Typography>
        <Stack spacing={2}>
          {isAuthenticated ? (
            <Button
              onClick={() => {
                push(GUEST_PATH?.referrals);
              }}
              sx={{ fontSize: 18 }}
              variant="contained"
            >
              Invite Friends
            </Button>
          ) : (
            <Button
              onClick={() => {
                push(GUEST_PATH?.signUp);
              }}
              sx={{ fontSize: 18 }}
              variant="contained"
            >
              Join waitlist
            </Button>
          )}

          <Typography variant="body1" color="error.main">
            Total participants: {data?.TotalPositions ?? 1000}
          </Typography>
          {isAuthenticated && (
            <Typography color="error.main" variant="body1">
              Total points: {data?.Points ?? 9000}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
