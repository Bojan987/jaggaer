import { Grid, Icon } from "@mui/material";
import React from "react";
import iconPackage from "../../resources/icons/package.svg";
import iconZoomIn from "../../resources/icons/zoom-in.svg";

const BigPackageContainer = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          border: "2px solid #EBEBEB",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Icon
          sx={{
            filter:
              "invert(100%) sepia(4%) saturate(603%) hue-rotate(221deg) brightness(114%) contrast(84%)",
            fontSize: "20rem",
          }}
        >
          <img src={iconPackage} />
        </Icon>

        <Icon
          sx={{
            filter:
              "invert(100%) sepia(12%) saturate(1220%) hue-rotate(293deg) brightness(91%) contrast(90%)",
            fontSize: "1.4rem",
          }}
        >
          <img src={iconZoomIn} />
        </Icon>
      </Grid>
    </Grid>
  );
};

export default BigPackageContainer;
