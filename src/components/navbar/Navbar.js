import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Grid, useMediaQuery } from "@mui/material";
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

  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "1.25em",
  },
}));

const AppBarStyled = styled(AppBar)({
  backgroundColor: "#fff",
});

const ToolbarStyled = styled(Toolbar)({
  minHeight: "0px",
});

const GridContainerStyled = styled(Grid)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: props.match450,
  minHeight: "100%",
}));

const GridItemStyled = styled(Grid)((props) => ({
  padding: props.padding,
}));

const Navbar = (props) => {
  const isVisible = useSelector((state) => state.isVisible);
  const { product: data } = useSelector((state) => state.product);

  const theme = useTheme();
  // remove title if screen is < 650px
  const match650 = useMediaQuery(theme.breakpoints.between(450, 900));
  const match450 = useMediaQuery(theme.breakpoints.down(450));
  styled;
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBarStyled>
          <ToolbarStyled>
            <GridContainerStyled
              container
              match450={match450 ? "center" : "space-between"}
            >
              {!match650 && !match450 && (
                <Grid
                  item
                  sm={!isVisible ? 4 : 8}
                  md={!isVisible ? 6 : 9}
                  lg={!isVisible ? 8 : 10}
                >
                  {data && data.article && (
                    <Typography variant="h5" component="div" color="secondary">
                      {data.article.description_short}
                    </Typography>
                  )}
                </Grid>
              )}
              {isVisible !== undefined && !isVisible && (
                <GridItemStyled item padding={match450 ? "20px" : "5px"}>
                  <AddToCart />
                </GridItemStyled>
              )}

              <Grid item>
                <Icons />
              </Grid>
            </GridContainerStyled>
          </ToolbarStyled>
        </AppBarStyled>
      </ElevationScroll>
      <Toolbar />

      <ToolbarMargin />
    </React.Fragment>
  );
};

export default Navbar;
