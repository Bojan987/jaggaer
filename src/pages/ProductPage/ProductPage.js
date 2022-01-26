import { Container, Grid } from "@mui/material";
import React from "react";
import BigPackageContainer from "../../components/packageContainers/BigPackageContainer";
import SmallPackageContainer from "../../components/packageContainers/SmallPackageContainer";
import ProductActionsContainer from "../../components/ProductActionsContainer/ProductActionsContainer";
import ProductDescription from "./ProductDescription";

const ProductPage = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Grid item sx={{ alignSelf: "flex-start", marginRight: "1rem" }}>
        <SmallPackageContainer />
      </Grid>
      <Grid>
        <BigPackageContainer />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          alignSelf: "flex-start",
          marginRight: "1rem",
          height: "22.4rem",
        }}
      >
        <ProductActionsContainer />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "2rem" }}>
        <ProductDescription />
      </Grid>
    </Grid>
  );
};

export default ProductPage;
