import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";
const ProductDescription = () => {
  return (
    <Grid container sx={{ backgroundColor: "#EFEFEF" }} spacing={2}>
      <Grid item xs={8} sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <Container>
          <Typography variant="subtitle1" color="secondary">
            DESCRIPTION
          </Typography>
          <Typography variant="subtitle1">
            {data.article.description_long}
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ backgroundColor: "#ffff" }}>
            <Container sx={{ height: "300px" }}>asdasdsd asdad dsa</Container>
          </Grid>
          <Grid item xs={4} sx={{ backgroundColor: "#ffff" }}>
            <Container sx={{ height: "300px" }}>asdasdads</Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
