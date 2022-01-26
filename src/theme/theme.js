import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EFEFEF",
    },
    secondary: {
      main: "#E35044",
    },
    // action: {
    //   active: "#333333",
    // },
    // success: {
    //   main: "#006442",
    // },
    // warning: {
    //   main: "#BE2528",
    // },
    // error: {
    //   main: "#BE2528",
    // },
    // info: {
    //   main: "#ffffff",
    // },
  },

  typography: {
    // fontFamily: "Open Sans,sans-serif",

    color: "#FFFFFF",

    tab: {
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },

    h1: {
      // fontFamily: "Roboto",
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h2: {
      // fontFamily: "Roboto",
      fontSize: "1.8rem",
      fontWeight: 900,
    },
    h3: {
      // fontFamily: "Roboto",
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h5: {
      // fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 300,
    },
    h6: {
      // fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 700,
    },

    body1: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    body2: {
      color: "#247185",
      fontSize: "0.7rem",
      fontWeight: 700,
    },
    caption: {
      color: "#969493",
      fontSize: "0.8rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    subtitle2: {
      fontSize: "0.9rem",
      fontWeight: "600",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minWidth: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
