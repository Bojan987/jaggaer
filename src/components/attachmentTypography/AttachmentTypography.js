import styled from "@emotion/styled";
import { Grid, Icon, Typography } from "@mui/material";
import React from "react";
import iconAttachment from "../../resources/icons/attachment.svg";

const GridContainerStyled = styled(Grid)({
  display: "flex",
  alignItems: "center",
  marginTop: "5px",
  marginLeft: "5px",
});

const GridItemStyled = styled(Grid)({
  display: "flex",
  alignItems: "center",
  marginBottom: "7px",
  marginRight: "5px",
});

const ImageStyled = styled("img")({
  height: "1rem",
});

const GridItemMbStyled = styled(Grid)({
  marginBottom: "5px",
});

const TypographyStyled = styled(Typography)({
  display: "inline",
  color: "#247185",
});

const AttachmentTypography = ({ label }) => {
  return (
    <GridContainerStyled container>
      <GridItemStyled item>
        <ImageStyled src={iconAttachment} />
      </GridItemStyled>
      <GridItemMbStyled item>
        <TypographyStyled variant="h6">{`${label} `}</TypographyStyled>
      </GridItemMbStyled>
    </GridContainerStyled>
  );
};

export default AttachmentTypography;
