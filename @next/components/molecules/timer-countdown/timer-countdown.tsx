import React from "react";
import { TimeDividerIcon } from "public/icons";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { ITimerCountDown } from "./timer-contdown.types";

export const TimerCountDown = (props: ITimerCountDown) => {
  const { days, hours, minutes, seconds } = props;

  return (
    <Stack direction="row" justifyContent="center">
      <Box
        sx={{
          background: (theme) => theme.palette.common.white,
          height: "120px",
          width: {
            xl: "100px",
            lg: "100px",
            md: "100px",
            sm: "90px",
            xs: "20%",
          },
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: (theme) => theme.shadows[1],
        }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          mb={2}
          sx={{
            fontSize: {
              xl: "2.75rem",
              lg: "2.75rem",
              md: "2.75rem",
              sm: "2rem !important",
              xs: "1.5rem !important",
            },
          }}
        >
          {days}
        </Typography>
        <Typography variant="body2" color="secondary.light">
          Days
        </Typography>
      </Box>
      <Divider
        component="div"
        role="presentation"
        sx={{
          padding: "0 0.25rem",
        }}
      >
        <TimeDividerIcon />
      </Divider>

      <Box
        sx={{
          background: (theme) => theme.palette.common.white,
          height: "120px",
          width: {
            xl: "100px",
            lg: "100px",
            md: "100px",
            sm: "90px",
            xs: "20%",
          },
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: (theme) => theme.shadows[1],
        }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          mb={2}
          sx={{
            fontSize: {
              xl: "2.75rem",
              lg: "2.75rem",
              md: "2.75rem",
              sm: "2rem !important",
              xs: "1.5rem !important",
            },
          }}
        >
          {hours}
        </Typography>
        <Typography variant="body2" color="secondary.light">
          Hours
        </Typography>
      </Box>
      <Divider
        component="div"
        role="presentation"
        sx={{
          padding: "0 0.25rem",
        }}
      >
        <TimeDividerIcon />
      </Divider>
      <Box
        sx={{
          background: (theme) => theme.palette.common.white,
          height: "120px",
          width: {
            xl: "100px",
            lg: "100px",
            md: "100px",
            sm: "90px",
            xs: "20%",
          },
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: (theme) => theme.shadows[1],
        }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          mb={2}
          sx={{
            fontSize: {
              xl: "2.75rem",
              lg: "2.75rem",
              md: "2.75rem",
              sm: "2rem !important",
              xs: "1.5rem !important",
            },
          }}
        >
          {minutes}
        </Typography>
        <Typography variant="body2" color="secondary.light">
          Mins
        </Typography>
      </Box>
      <Divider
        component="div"
        role="presentation"
        sx={{
          padding: "0 0.25rem",
        }}
      >
        <TimeDividerIcon />
      </Divider>
      <Box
        sx={{
          background: (theme) => theme.palette.common.white,
          height: "120px",
          width: {
            xl: "100px",
            lg: "100px",
            md: "100px",
            sm: "90px",
            xs: "20%",
          },
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: (theme) => theme.shadows[1],
        }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          mb={2}
          sx={{
            fontSize: {
              xl: "2.75rem",
              lg: "2.75rem",
              md: "2.75rem",
              sm: "2rem !important",
              xs: "1.5rem !important",
            },
          }}
        >
          {seconds}
        </Typography>
        <Typography variant="body2" color="secondary.light">
          Sec
        </Typography>
      </Box>
    </Stack>
  );
};
