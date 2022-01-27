import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import BigPackageContainer from "../../components/packageContainers/BigPackageContainer";
import SmallPackageContainer from "../../components/packageContainers/SmallPackageContainer";
import ProductActionsContainer from "../../components/ProductActionsContainer/ProductActionsContainer";
import ProductDescription from "./ProductDescription";

const ProductPage = () => {
  const theme = useTheme();
  // change dispay on screens < 900px
  const match900 = useMediaQuery(theme.breakpoints.down(900));

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: match900 ? "center" : "flex-start",
      }}
    >
      <Grid
        item
        sx={{
          alignSelf: "flex-start",

          marginRight: "1rem",
        }}
      >
        <SmallPackageContainer />
      </Grid>
      <Grid>
        <BigPackageContainer />
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
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
