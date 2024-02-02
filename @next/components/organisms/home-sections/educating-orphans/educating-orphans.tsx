import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Image from "next/image";
import { orphanImage } from "public/images";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useMediaQuery from "@mui/material/useMediaQuery";

export const EducatingOrphans = () => {
  const matches = useMediaQuery("(min-width:1400px)");
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleAccordionChange = (id: number) => {
    setExpanded((prev) => (prev === id ? false : id));
  };
  return (
    <Box
      sx={{
        // background: (theme) => theme.palette.common.gradientPrimary,
        backgroundImage: `url('/images/top-auction-bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        pt: { xl: 10.5, lg: 10.5, md: 8, sm: 6, xs: 3 },
        pb: { xl: 14, lg: 14, md: 10, sm: 0, xs: 0 },
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: matches ? "82rem" : "70rem",
          padding: "0 0.5rem",
        }}
      >
        <Grid container spacing={10}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                maxWidth: {
                  xl: "33.44rem",
                  lg: "33.44rem",
                  md: "33.33rem",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              <Typography variant="h3" color="secondary.main">
                Lottery for a Cause: Educating Orphans with CoinChance
              </Typography>
              <Typography
                mt={3}
                variant="h6"
                fontWeight={500}
                color="secondary.light"
                sx={{
                  maxWidth: {
                    xl: "32rem",
                    lg: "32rem",
                    md: "32rem",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                At CoinChance, we believe in using the power of crypto lotteries
                to make a positive impact on the lives of those in need. Our
                commitment extends globally, with a specific focus on supporting
                early education for orphans. Despite being headquartered
                elsewhere, we recognize the urgent need for education in regions
                like India, where 31 million orphans face significant
                challenges.
              </Typography>
              <Typography
                mt={3}
                variant="h6"
                fontWeight={500}
                color="secondary.main"
              >
                The Global Orphan Education Crisis:
              </Typography>
              <Box>
                <Accordion
                  expanded={expanded === 1}
                  onChange={() => handleAccordionChange(1)}
                  sx={{
                    border: 0,
                    boxShadow: 1,
                    my: 2,
                    borderRadius: "20px !important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 1 ? (
                        <RemoveIcon
                          sx={{
                            backgroundColor: "#717184",
                            borderRadius: "50%",
                            color: "white",
                          }}
                        />
                      ) : (
                        <AddIcon
                          sx={{
                            backgroundColor: "#717184",
                            borderRadius: "50%",
                            color: "white",
                          }}
                          color="secondary"
                        />
                      )
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      py={1}
                      fontSize={20}
                      fontWeight={600}
                      color="primary.main"
                    >
                      Key Figures Illuminate the Urgency
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      color="secondary.light"
                    >
                      Over 153 million children worldwide are orphans. Asia
                      hosts 71 million orphans, Africa has 59 million, and
                      almost 9 million reside in Latin America and the Caribbean
                      islands. India alone has 31 million orphans.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 2}
                  onChange={() => handleAccordionChange(2)}
                  sx={{
                    border: 0,
                    boxShadow: 1,
                    my: 2,
                    borderRadius: "20px !important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === 2 ? (
                        <RemoveIcon
                          sx={{
                            backgroundColor: "#717184",
                            borderRadius: "50%",
                            color: "white",
                          }}
                        />
                      ) : (
                        <AddIcon
                          sx={{
                            backgroundColor: "#717184",
                            borderRadius: "50%",
                            color: "white",
                          }}
                          color="secondary"
                        />
                      )
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      py={1}
                      fontSize={20}
                      fontWeight={600}
                      color="primary.main"
                    >
                      Lottery for Orphan Education
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                      color="secondary.light"
                    >
                      CoinChance is proud to introduce our "Lottery for a Cause"
                      initiative, where 5% of the prize pool from every lottery
                      goes directly to support orphan education programs
                      globally.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                src={orphanImage}
                // width={600}
                // height={631}
                alt="educate_orphans"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
