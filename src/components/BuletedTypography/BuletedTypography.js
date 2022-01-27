import styled from "@emotion/styled";
import { Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";

const GridContainerStyled = styled(Grid)({
  display: "flex",
  alignItems: "center",
  marginTop: "5px",
  marginLeft: "5px",
});

const GridItemStyled = styled(Grid)({
  display: "flex",
  alignItems: "center",
});

const GridItemMbStyled = styled(Grid)({
  marginBottom: "5px",
});

const TypographyStyled = styled(Typography)({
  display: "inline",
});

const BuletedTypography = ({ label, value }) => {
  return (
    <GridContainerStyled container>
      <GridItemStyled item>
        <SvgIcon fontSize="0.1rem">
          <svg viewBox="0 0 100 100" height="12px" width="12px">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </SvgIcon>
      </GridItemStyled>
      <GridItemMbStyled item>
        <TypographyStyled variant="h6">{`${label}: `}</TypographyStyled>
        <TypographyStyled variant="subtitle1">{` ${value}`}</TypographyStyled>
      </GridItemMbStyled>
    </GridContainerStyled>
  );
};

export default BuletedTypography;
