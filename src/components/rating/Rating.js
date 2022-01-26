import { Grid, Icon } from "@mui/material";
import React from "react";
import iconStar from "../../resources/icons/star-filled.svg";
import iconEmptyStar from "../../resources/icons/star.svg";

const Rating = () => {
  return (
    <Grid container sx={{ margin: "1rem 0" }}>
      <Icon
        sx={{
          filter:
            "invert(74%) sepia(28%) saturate(6590%) hue-rotate(351deg) brightness(107%) contrast(92%)",
          fontSize: "1.5rem",
        }}
      >
        <img src={iconStar} />
      </Icon>{" "}
      <Icon
        sx={{
          filter:
            "invert(74%) sepia(28%) saturate(6590%) hue-rotate(351deg) brightness(107%) contrast(92%)",
          fontSize: "1.5rem",
        }}
      >
        <img src={iconStar} />
      </Icon>{" "}
      <Icon
        sx={{
          filter:
            "invert(74%) sepia(28%) saturate(6590%) hue-rotate(351deg) brightness(107%) contrast(92%)",
          fontSize: "1.5rem",
        }}
      >
        <img src={iconStar} />
      </Icon>{" "}
      <Icon
        sx={{
          filter:
            "invert(74%) sepia(28%) saturate(6590%) hue-rotate(351deg) brightness(107%) contrast(92%)",
          fontSize: "1.5rem",
        }}
      >
        <img src={iconEmptyStar} />
      </Icon>{" "}
      <Icon
        sx={{
          filter:
            "invert(74%) sepia(28%) saturate(6590%) hue-rotate(351deg) brightness(107%) contrast(92%)",
          fontSize: "1.5rem",
        }}
      >
        <img src={iconEmptyStar} />
      </Icon>
    </Grid>
  );
};

export default Rating;
