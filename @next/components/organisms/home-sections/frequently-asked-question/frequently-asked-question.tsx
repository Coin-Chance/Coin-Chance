import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { questionsData } from "./questions.data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const FrequentlyAskedQuestion = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleAccordionChange = (id: number) => {
    setExpanded((prev) => (prev === id ? false : id));
  };
  return (
    <Box bgcolor={"white"} py={10} px={1}>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1076px",
        }}
      >
        <Typography
          mb={7}
          variant="h3"
          color="secondary.main"
          textAlign="center"
        >
          Frequently asked questions
        </Typography>
        {questionsData?.map((item) => (
          <Accordion
            expanded={expanded === item.id}
            onChange={() => handleAccordionChange(item.id)}
            key={item.id}
          >
            <AccordionSummary
              expandIcon={
                expanded === item.id ? (
                  <RemoveIcon color="secondary" />
                ) : (
                  <AddIcon color="secondary" />
                )
              }
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography
                py={3}
                fontSize={20}
                fontWeight={600}
                color="secondary.main"
              >
                {item.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item?.description?.map((des) => (
                <Typography
                  key={des}
                  variant="h6"
                  fontWeight={400}
                  color="secondary.light"
                >
                  {des}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
