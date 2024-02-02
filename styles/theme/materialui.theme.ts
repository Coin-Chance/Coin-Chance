import { createTheme } from "@mui/material/styles";
import ComponentsOverrides from "./overrides";

// Create a theme instance.
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mdCustom: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    darkBlack: string;
    orange: string;
    darkBlue: string;
    lightOrange: string;
    darkOrange: string;
    oceanBlue: string;
    lightYellow: string;
    red: string;
    green: string;
    black: string;
    white: string;
    icon: string;
    lightBlue: string;
    gradient: string;
    dottedBorder: string;
    searchFieldColor: string;
    assetStatusRed: string;
    lightBlack: string;
    label: String;
    gradientPrimary: string;
    lightGreen: string;
    gradientSecondary: string;
  }
}
declare module "@mui/material/styles/createTheme" {
  interface Theme {
    shape: {
      borderRadius: number;
    };
  }
  interface ThemeOptions {
    shape?: {
      borderRadius?: number;
    };
  }
}

export const MUITheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mdCustom: 968,
    },
  },

  palette: {
    primary: {
      main: "#5235E8",
      light: `#6349ea`,
      dark: "#412ab9",
    },
    common: {
      lightBlue: "#F6F9FA",
      darkBlack: "#000",
      orange: "#FAB817",
      darkBlue: "#09091E ",
      lightOrange: "#E7E3FC",
      oceanBlue: "#00D1FF",
      darkOrange: "#F18621",
      lightYellow: "#FFF2D1",
      red: "#FF4950",
      green: "#17D85C",
      lightGreen: "#CEFFE5",
      black: "#181C25",
      white: "#FFF",
      icon: "#F7F6FE",
      dottedBorder: "#E4ECF7",
      searchFieldColor: "#EDF2F7",
      assetStatusRed: "#D1373F",
      lightBlack: "#425466",
      gradient:
        "linear-gradient(to right, #FFFFFF 0%, #EFEDFD 100%, #FFFFFF 100%)",
      gradientPrimary: "linear-gradient(to top, #FFFFFF 20%, #EFEDFD 100%)",
      gradientSecondary:
        "linear-gradient(to bottom, #FFFFFF 20%, #EFEDFD 100%)",
    },
    success: {
      main: "#17D85C",
    },
    error: {
      main: "#EB5353",
    },
    secondary: {
      main: "#09091E",
      light: "#717184",
    },
    grey: {
      900: "#181C25",
      800: "#949494",
      700: "#B5B5B5",
      600: "#D7D7D7",
      500: "#F2F2F2",
      400: "#F9F9F9",
      300: "#8992A9",
    },
    text: {
      primary: "#000",
      secondary: "#8492A6",
    },
    action: {
      disabled: "#fff",
      disabledBackground: "#ABE7FF",
    },
  },
  shadows: [
    "none",
    "0px 47px 72px 0px rgba(82, 53, 232, 0.09)",
    "0px 15px 43px 0px rgba(154, 157, 246, 0.47)",
    "0px 4px 4px 0px rgba(161, 145, 243, 0.3)",
    createTheme({}).shadows[2],
    createTheme({}).shadows[3],
    createTheme({}).shadows[4],
    createTheme({}).shadows[5],
    createTheme({}).shadows[6],
    createTheme({}).shadows[7],
    createTheme({}).shadows[8],
    createTheme({}).shadows[9],
    createTheme({}).shadows[10],
    createTheme({}).shadows[11],
    createTheme({}).shadows[12],
    createTheme({}).shadows[13],
    createTheme({}).shadows[14],
    createTheme({}).shadows[15],
    createTheme({}).shadows[16],
    createTheme({}).shadows[17],
    createTheme({}).shadows[18],
    createTheme({}).shadows[19],
    createTheme({}).shadows[20],
    createTheme({}).shadows[21],
    createTheme({}).shadows[22],
  ],
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "Inter,",
    h1: {
      fontWeight: 700,
      fontSize: "4rem", // 64px
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.75rem", // 44px
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.5rem", // 40px
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem", // 32px
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem", // 24px
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem", // 18px
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem", // 16px
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "0.875rem", // 14px
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem", // 16px
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.875rem", // 14 px
    },
  },
});
MUITheme.components = ComponentsOverrides(MUITheme);
