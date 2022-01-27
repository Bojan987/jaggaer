import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import BigPackageContainer from "../../components/packageContainers/BigPackageContainer";
import SmallPackageContainer from "../../components/packageContainers/SmallPackageContainer";
import ProductActionsContainer from "../../components/ProductActionsContainer/ProductActionsContainer";
import ProductDescription from "./ProductDescription";

const GridContainer = styled(Grid)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: props.justify,
}));

const GridItemSmall = styled(Grid)({
  alignSelf: "flex-start",

  marginRight: "1rem",
});

const GridProductActions = styled(Grid)({
  alignSelf: "flex-start",
  marginRight: "1rem",
  height: "22.4rem",
});

const GridProductDescription = styled(Grid)({
  marginTop: "2rem",
});
const ProductPage = () => {
  const theme = useTheme();
  // change dispay on screens < 900px
  const match900 = useMediaQuery(theme.breakpoints.down(900));

  return (
    <GridContainer container justify={match900 ? "center" : "flex-start"}>
      <GridItemSmall item>
        <SmallPackageContainer />
      </GridItemSmall>
      <Grid>
        <BigPackageContainer />
      </Grid>
      <GridProductActions item lg={3} md={4}>
        <ProductActionsContainer />
      </GridProductActions>
      <GridProductDescription item xs={12}>
        <ProductDescription />
      </GridProductDescription>
    </GridContainer>
  );
};

export default ProductPage;
