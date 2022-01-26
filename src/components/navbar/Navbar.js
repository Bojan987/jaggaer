import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Grid } from "@mui/material";
import data from "../../resources/data/data.json";
import Icons from "./Icons";
import styled from "@emotion/styled";

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
  console.log(data);
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
                justifyContent: "space-between",
                minHeight: "100%",
              }}
            >
              <Grid item>
                <Typography variant="h5" component="div" color="secondary">
                  {data.article.description_short}
                </Typography>
              </Grid>

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
