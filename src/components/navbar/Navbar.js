import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Grid, useMediaQuery } from "@mui/material";
import data from "../../resources/data/data.json";
import Icons from "./Icons";
import styled from "@emotion/styled";
import AddToCart from "../addToCart/AddToCart";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: { borderBottom: "1px solid #EBEBEB", backgroundColor: "#fff" },
  });
}

const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  // marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "1.25em",
  },
}));

const Navbar = (props) => {
  const isVisible = useSelector((state) => state.isVisible);
  const theme = useTheme();
  // remove title if screen is < 650px
  const match650 = useMediaQuery(theme.breakpoints.between(450, 900));
  const match450 = useMediaQuery(theme.breakpoints.down(450));

  console.log(match650, match450);
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "#fff" }}>
          <Toolbar sx={{ minHeight: "0px" }}>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: match450 ? "center" : "space-between",
                minHeight: "100%",
              }}
            >
              {!match650 && !match450 && (
                <Grid
                  item
                  sm={!isVisible ? 4 : 8}
                  md={!isVisible ? 6 : 9}
                  lg={!isVisible ? 8 : 10}
                >
                  <Typography variant="h5" component="div" color="secondary">
                    {data.article.description_short}
                  </Typography>
                </Grid>
              )}
              {isVisible !== undefined && !isVisible && (
                <Grid item sx={{ padding: match450 ? "20px" : "5px" }}>
                  <AddToCart />
                </Grid>
              )}

              <Grid item>
                <Icons />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Navbar;
