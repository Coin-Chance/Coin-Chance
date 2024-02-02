// material-ui
import { Theme } from "@mui/material/styles";

// third-party
import { merge } from "lodash";

// project import
import Button from "./button";
import OutlinedInput from "./outline-input";
import FormLabel from "./form-label";
import Accordion from "./accordion";
import AccordionSummary from "./accordion-summary";
import AccordionDetails from "./accordion-details";
// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Button(theme),
    OutlinedInput(theme),
    FormLabel(theme),
    Accordion(theme),
    AccordionSummary(theme),
    AccordionDetails(theme),
    AccordionSummary(theme)
  );
}
