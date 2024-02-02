// material-ui
import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - ALERT TITLE ||============================== //

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: true,
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${theme.palette.common.lightOrange}`,
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&.MuiAccordion-root:first-of-type": {
            borderRadius: "10px 10px 0 0",
          },
          "&:last-child": {
            borderRadius: "0px 0px 10px 10px",
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.common.lightOrange,
          },
        },
      },
    },
  };
}
