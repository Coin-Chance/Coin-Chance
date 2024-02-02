import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  Box,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { roadMapData } from "./roadmap.data";

export const CoinChangeRoadMap = () => {
  const match = useMediaQuery("(min-width:1400px)");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        py: 6,
        background: (theme) => theme.palette.common.gradient,
      }}
    >
      <Box
        px={1}
        sx={{ margin: "0 auto", maxWidth: matches ? "82rem" : "70rem" }}
      >
        <Typography
          variant="h3"
          color="secondary.main"
          textAlign="center"
          mb={2}
        >
          Coin Chance Roadmap
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          color="secondary.light"
          textAlign="center"
          mb={3}
        >
          Embark on our journey of milestones as we pave the way for
          CoinChance's future success. Follow our roadmap as we build towards a
          larger vision.
        </Typography>

        <Timeline
          position={matches ? "alternate" : "right"}
          sx={{
            "& .MuiTimelineItem-root::before": {
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            },
          }}
        >
          <TimelineItem></TimelineItem>
          {roadMapData?.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{
                    width: "10px",
                    backgroundColor: item.completed
                      ? theme?.palette.primary.main
                      : "rgba(82, 53, 232, 0.2)",
                    borderRadius: item.id === 1 ? "10px 10px 0px 0px" : "0",
                  }}
                />
                <TimelineDot
                  sx={{
                    m: 0,
                    backgroundColor: "rgba(82, 53, 232, 0.2)",
                    p: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: item.completed
                        ? theme?.palette.primary.main
                        : "#AD9EF8",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                    }}
                  ></Box>
                </TimelineDot>
                {item.id !== roadMapData?.length && (
                  <TimelineConnector
                    sx={{
                      width: "10px",
                      backgroundColor: "rgba(82, 53, 232, 0.2)",
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    m: "auto",
                    borderRadius: "20px",
                    maxWidth: { xl: 500, lg: 500, md: 300 },
                    width: "100%",
                    boxShadow: 1,
                    py: 3,
                    px: { xs: 1, sm: 2, md: 2, lg: 2.5, xl: 3.4 },
                    my: 4,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    color="secondary.main"
                    textAlign="start"
                  >
                    {item?.name}
                  </Typography>
                  <List>
                    {item.points?.map((points) => (
                      <ListItem key={points} sx={{ px: 0, py: 0.2 }}>
                        <Typography
                          variant="caption"
                          fontWeight={500}
                          color="secondary.light"
                        >
                          {points}
                        </Typography>{" "}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};
