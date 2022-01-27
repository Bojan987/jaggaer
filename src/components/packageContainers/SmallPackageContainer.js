import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import iconPackage from "../../resources/icons/package.svg";

const GridContainerStyled = styled(Grid)((props) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: props.row,
  marginLeft: "2px",
}));

const GridItemStyled = styled(Grid)((props) => ({
  border: "2px solid #EBEBEB",
  padding: "1rem",
  marginBottom: "1rem",
  marginRight: props.marginRight,
}));

const GridItemPackageStyled = styled(Grid)((props) => ({
  border: "2px solid #EBEBEB",
  padding: "1rem",
}));

const ImagePackageStyled = styled("img")({
  height: "4rem",
});

const SmallPackageContainer = () => {
  const theme = useTheme();
  // change display on screens < 550px
  const match550 = useMediaQuery(theme.breakpoints.down(550));
  return (
    <GridContainerStyled container row={match550 ? "row" : "column"}>
      <GridItemStyled
        item
        xs={match550 ? 5 : 12}
        marginRight={match550 ? "1rem" : 0}
      >
        <ImagePackageStyled src={iconPackage} />
      </GridItemStyled>
      <GridItemPackageStyled item xs={match550 ? 5 : 12}>
        <ImagePackageStyled src={iconPackage} />
      </GridItemPackageStyled>
    </GridContainerStyled>
  );
};

export default SmallPackageContainer;
