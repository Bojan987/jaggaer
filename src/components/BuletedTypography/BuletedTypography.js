import { Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";

const BuletedTypography = ({ label, value }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "5px",
        marginLeft: "5px",
      }}
    >
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <SvgIcon fontSize="0.1rem">
          <svg viewBox="0 0 100 100" height="12px" width="12px">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </SvgIcon>
      </Grid>
      <Grid item sx={{ marginBottom: "5px" }}>
        <Typography
          variant="h6"
          sx={{ display: "inline" }}
        >{`${label}: `}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: "inline" }}
        >{` ${value}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default BuletedTypography;
