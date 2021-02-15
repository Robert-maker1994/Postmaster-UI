import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const myTheme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      root: {
        justifyContent: "center",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#512da8",
        color: "#fff",
      },
    },
    MuiCard: {
      root: {
        maxWidth: 343,
        borderRadius: 20,
        margin: "10px",
      },
    },
    MuiCardContent: {
      root: {
        padding: 24,
      },
    },
    MuiAppBar: {
      root: {
        display: "flex",
        flexDirection: "none",
        alignItems: "center",
        position: "initial",
        marginBottom: "25px"
      },
    },
  },
  MuiCard: {
    root: {},
  },
	MuiFormControl:{
    root: {
      margin: "30px 25px"
    },
    },
  palette: {
    primary: {
      main: "#512da8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#66BB6A",
      contrastText: "#fff",
    },
    clockCircleColor: "#ffffff",
    disabledColor: "#ffffff",
    contrastThreshold: 3,
  },
  MuiTypography: {
    subtitle1: {
      fontFamily: 'Cambria', 'Cochin': 'Georgia Times Times', 'New Roman' : 'serif',
  margin:'auto',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: 1.5,
    }
  },
});

export default function Theme(props) {
  return <ThemeProvider theme={myTheme}>{props.children}</ThemeProvider>;
}
