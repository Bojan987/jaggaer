import { useTheme } from "@emotion/react";
import { Grid, Icon, useMediaQuery } from "@mui/material";
import React from "react";
import iconPackage from "../../resources/icons/package.svg";

const SmallPackageContainer = () => {
  const theme = useTheme();

  const match550 = useMediaQuery(theme.breakpoints.down(550));
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: match550 ? "row" : "column",
        marginLeft: "2px",
      }}
    >
      <Grid
        item
        xs={match550 ? 5 : 12}
        sx={{
          border: "2px solid #EBEBEB",
          padding: "1rem",
          marginBottom: "1rem",
          marginRight: match550 ? "1rem" : 0,
        }}
      >
        <Icon
          sx={{
            filter:
              "invert(100%) sepia(1%) saturate(7435%) hue-rotate(188deg) brightness(127%) contrast(84%)",
            fontSize: "4rem",
          }}
        >
          <img src={iconPackage} />
        </Icon>
      </Grid>
      <Grid
        item
        xs={match550 ? 5 : 12}
        sx={{ border: "2px solid #EBEBEB", padding: "1rem" }}
      >
        <Icon
          sx={{
            filter:
              "invert(100%) sepia(1%) saturate(7435%) hue-rotate(188deg) brightness(127%) contrast(84%)",
            fontSize: "4rem",
          }}
          className="svgIcon"
        >
          <img src={iconPackage} className="svgIcon" />
        </Icon>
      </Grid>
    </Grid>
  );
};

export default SmallPackageContainer;
