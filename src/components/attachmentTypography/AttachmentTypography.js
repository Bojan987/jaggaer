import { Grid, Icon, Typography } from "@mui/material";
import React from "react";
import iconAttachment from "../../resources/icons/attachment.svg";

const AttachmentTypography = ({ label }) => {
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
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "7px",
          marginRight: "5px",
        }}
      >
        <Icon
          sx={{
            fontSize: "1rem",
          }}
        >
          <img src={iconAttachment} />
        </Icon>
      </Grid>
      <Grid item sx={{ marginBottom: "5px" }}>
        <Typography
          variant="h6"
          sx={{ display: "inline", color: "#247185" }}
        >{`${label} `}</Typography>
      </Grid>
    </Grid>
  );
};

export default AttachmentTypography;
