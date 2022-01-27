import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import iconPackage from "../../resources/icons/package.svg";
import iconZoomIn from "../../resources/icons/zoom-in.svg";

const GridContainerStyled = styled(Grid)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
});

const GridItemStyled = styled(Grid)({
  border: "2px solid #EBEBEB",
  padding: "1rem",
  marginBottom: "1rem",
});

const ImagePackageStyled = styled("img")({
  height: "20rem",
});
const ImageZoomStyled = styled("img")({
  height: "1.4rem",
});

const BigPackageContainer = () => {
  return (
    <GridContainerStyled container>
      <GridItemStyled item xs={12}>
        <ImagePackageStyled src={iconPackage} />

        <ImageZoomStyled src={iconZoomIn} />
      </GridItemStyled>
    </GridContainerStyled>
  );
};

export default BigPackageContainer;
