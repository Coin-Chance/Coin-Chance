import {
  Box,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "public/icons";
import { FooterLogo } from "public/images";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  FooterDataCompany,
  FooterDataQuickLink,
  FooterDataResourses,
} from "./footer.data";

export const Footer = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.common.gradientSecondary,
        py: { xl: 8, lg: 8, md: 8, sm: 5, xs: 2 },
        px: 1,
      }}
    >
      <Box sx={{ margin: "0 auto", maxWidth: matches ? "82rem" : "70rem" }}>
        <Box
          sx={{
            background: theme.palette.common.white,
            borderRadius: "20px",
            border: `1px solid ${theme.palette.common.lightOrange}`,
            py: { xl: 11.25, lg: 11.25, md: 11.25, sm: 8, xs: 6 },
            px: { xl: 7, lg: 7, md: 7, sm: 3, xs: 3 },
          }}
        >
          <Grid container>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
              <Stack
                spacing={3}
                sx={{
                  display: "flex",
                  alignItems: {
                    xl: "flex-start",
                    lg: "flex-start",
                    md: "center",
                    sm: "center",
                    xs: "center",
                  },
                  margin: {
                    xl: 0,
                    lg: 0,
                    md: "0 0 2rem",
                    sm: "0 0 2rem",
                    xs: "0 0 2rem",
                  },
                }}
              >
                <Image
                  src={FooterLogo}
                  alt="website_logo"
                  style={{ width: "284px", height: "58px" }}
                />
                <Stack direction="row" spacing={2}>
                  <Link
                    href="https://twitter.com/CoinChanceDAO"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </Link>

                  <TelegramIcon />
                  <DiscordIcon />
                </Stack>
                <Typography variant="subtitle1" color="secondary.light">
                  Copyright 2024 © Coinchance
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xl={2.6}
              lg={2.6}
              md={4}
              sm={4}
              xs={12}
              sx={{
                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "left",
                  sm: "left",
                  xs: "center",
                },
              }}
            >
              <Typography fontSize={20} fontWeight={600} color="secondary.main">
                Company
              </Typography>
              <List
                sx={{
                  "& li": {
                    justifyContent: {
                      xl: "flex-start",
                      lg: "flex-start",
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "center",
                    },
                  },
                }}
              >
                {FooterDataCompany?.map((item) => (
                  <ListItem sx={{ px: 0 }} key={item.id}>
                    {" "}
                    <Link
                      href={item.link}
                      color="secondary.light"
                      style={{
                        fontWeight: 400,
                        fontSize: 20,
                        textDecoration: "none",
                        color: theme.palette.secondary.light,
                      }}
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              xl={2.6}
              lg={2.6}
              md={4}
              sm={4}
              xs={12}
              sx={{
                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "left",
                  sm: "left",
                  xs: "center",
                },
              }}
            >
              <Typography fontSize={20} fontWeight={600} color="secondary.main">
                Quick Links
              </Typography>
              <List
                sx={{
                  "& li": {
                    justifyContent: {
                      xl: "flex-start",
                      lg: "flex-start",
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "center",
                    },
                  },
                }}
              >
                {FooterDataQuickLink?.map((item) => (
                  <ListItem sx={{ px: 0 }} key={item.id}>
                    {" "}
                    <Link
                      href={item.link}
                      color="secondary.light"
                      style={{
                        fontWeight: 400,
                        fontSize: 20,
                        textDecoration: "none",
                        color: theme.palette.secondary.light,
                      }}
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              xl={2.6}
              lg={2.6}
              md={4}
              sm={4}
              xs={12}
              sx={{
                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "left",
                  sm: "left",
                  xs: "center",
                },
              }}
            >
              <Typography fontSize={20} fontWeight={600} color="secondary.main">
                Resourses
              </Typography>
              <List
                sx={{
                  "& li": {
                    justifyContent: {
                      xl: "flex-start",
                      lg: "flex-start",
                      md: "flex-start",
                      sm: "flex-start",
                      xs: "center",
                    },
                  },
                }}
              >
                {FooterDataResourses?.map((item) => (
                  <ListItem sx={{ px: 0 }} key={item.id}>
                    {" "}
                    <Link
                      href={item.link}
                      color="secondary.light"
                      style={{
                        fontWeight: 400,
                        fontSize: 20,
                        textDecoration: "none",
                        color: theme.palette.secondary.light,
                      }}
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
