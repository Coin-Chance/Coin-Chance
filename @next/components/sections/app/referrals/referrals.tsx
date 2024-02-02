import { ErrorMessage, NoContentFound, TableLoader } from "@atoms";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useGetReferralsQuery } from "@services";
import {
  DirectIcon,
  IndirectIcon,
  PeopleIcon,
  TotalPointsIcon,
} from "public/icons";
import React from "react";
import toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Referrals = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  const { data, error, isLoading } = useGetReferralsQuery({});

  const theme = useTheme();
  if (isLoading) return <TableLoader />;
  if (error) return <ErrorMessage label="Some Thing Went Wrong" />;
  return (
    <Box mt={4} px={8} pb={4} sx={{ height: "100%" }}>
      <Box sx={{ margin: "0 auto", maxWidth: matches ? "82rem" : "70rem" }}>
        <Typography variant="h2">Referrals</Typography>
        <Box
          px={8}
          py={6.2}
          mt={3}
          borderRadius={2.5}
          sx={{
            backgroundColor: (theme) => theme.palette.common.white,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PeopleIcon />
          <Typography variant="h5" color="secondary.main">
            Your Position
          </Typography>
          <Typography fontSize={96} fontWeight={600} color="primary.main">
            {data?.Position}
          </Typography>
          <Typography variant="h4" color="secondary.light">
            {data?.TotalPositions}
          </Typography>
          <Box
            px={4}
            py={6.2}
            border={`1px solid ${theme.palette.common.lightOrange}`}
            borderRadius={1.5}
            mt={4}
            p={3}
            width="100%"
          >
            <Typography
              textAlign="start"
              variant="h5"
              color="secondary.main"
              mb={2}
            >
              Your Invitation Code
            </Typography>
            <Stack direction="row" spacing={3}>
              <Box sx={{ width: "487px" }}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& .Mui-disabled": {
                        WebkitTextFillColor: (theme) =>
                          theme.palette.secondary.main,
                      },
                    },
                    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: (theme) =>
                          theme.palette.common.lightOrange,
                      },
                  }}
                  type="text"
                  value={data?.ReferralLink}
                  disabled
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Button
                variant="contained"
                onClick={() => {
                  toast.success("Invite Link Copied ", {
                    style: {
                      color: "black",
                      background: "rgba(188, 176, 244, 0.9)",
                    },
                  });
                  navigator.clipboard.writeText(data?.ReferralLink);
                }}
                sx={{
                  height: "3.188rem",
                  minWidth: "7.313rem",
                  width: "7.313rem",
                }}
              >
                Copy Link
              </Button>
              <Stack pl={5} direction="row" alignItems="center" spacing={2}>
                <DirectIcon />
                <Box>
                  <Typography variant="h5" color="secondary.main">
                    {data?.DirectInvited}
                  </Typography>
                  <Typography variant="body2" color="secondary.light">
                    Direct Invite
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IndirectIcon />
                <Box>
                  <Typography variant="h5" color="secondary.main">
                    {data?.IndirectInvited}
                  </Typography>
                  <Typography variant="body2" color="secondary.light">
                    Indirect Invite
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TotalPointsIcon />
                <Box>
                  <Typography variant="h5" color="secondary.main">
                    {data?.Points}
                  </Typography>
                  <Typography variant="body2" color="secondary.light">
                    Total Points
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
