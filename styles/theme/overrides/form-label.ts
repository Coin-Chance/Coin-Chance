// material-ui
import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - FORM LABEL ||============================== //

export default function FormLabel(theme: Theme) {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
        },
        outlined: {
          lineHeight: "0.8em",
          "&.MuiInputLabel-sizeSmall": {
            lineHeight: "1em",
          },
          "&.MuiInputLabel-shrink": {
            background: theme.palette.background.paper,
            padding: "0 8px",
            marginLeft: -6,
            lineHeight: "1.4375em",
          },
        },
      },
    },
  };
}
