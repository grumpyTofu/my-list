import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
  components: {
    // MuiListItemIcon: {
    //   root: {
    //     color: '#FFF !important'
    //   }
    // },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#BDBDBD",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.5))",
          backdropFilter: "blur(1rem)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: "1px solid rgba(110, 108, 110, .75)",
          color: "rgba(110, 108, 110, .75)",
        },
        contained: {
          background: "linear-gradient(to bottom right, rgba(245, 0, 87,0.5), rgba(245, 0, 87,0.3)) !important",
          color: "white",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontWeight: "bold",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "unset",
          background: "linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(255,255,255,0.7))",
          backdropFilter: "blur(1rem)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
  },
});
