// material-ui
import { Theme } from "@mui/material/styles";

// assets
import { ForkRightOutlined } from "@mui/icons-material";

// ==============================|| OVERRIDES - ALERT TITLE ||============================== //

export default function AccordionSummary(theme: Theme) {
  const { palette, spacing } = theme;

  return {
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <ForkRightOutlined />,
      },
      styleOverrides: {
        root: {
          overFlow: "hidden",
          backgroundColor: "transparent",
          minHeight: 50,
        },
        expandIconWrapper: {
          "&.Mui-expanded": {
            transform: "none",
          },
        },
        content: {
          marginTop: spacing(1.25),
          marginBottom: spacing(1.25),
          marginLeft: spacing(1),
        },
      },
    },
  };
}
