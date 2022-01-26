import { Grid, Icon, Typography } from "@mui/material";
import React from "react";
import data from "../../resources/data/data.json";
import Rating from "../rating/Rating";
import iconDicount from "../../resources/icons/discount.svg";
import AddToCart from "../addToCart/AddToCart";

const ProductActionsContainer = () => {
  const formatPrice = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Grid
      container
      sx={{
        marginLeft: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Grid item>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {data.article.description_short}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ display: "inline" }} variant="caption">
              by
            </Typography>
            <Typography sx={{ display: "inline" }} variant="body2">
              {` Supplier ${data.article.supplier_name}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Rating />
          </Grid>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <Typography sx={{ display: "inline" }} variant="subtitle2">
              {formatPrice(data.article.price)}
            </Typography>
            <Typography sx={{ display: "inline" }} variant="subtitle1">
              {` ${data.article.currency}`}
            </Typography>
            <Typography sx={{ display: "inline" }} variant="caption">
              {` + ${formatPrice(data.article.transport_costs)} shipping`}
            </Typography>
            <Icon
              sx={{
                fontSize: "1rem",

                marginLeft: "7px",
                // position: "absolute",
                // top: 0,
                // left: 180,
              }}
            >
              <img src={iconDicount} />
            </Icon>
            <Typography sx={{ display: "block" }} variant="caption">
              {`all prices inl.${data.article.vat_percent} % taxes`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AddToCart />
      </Grid>
    </Grid>
  );
};

export default ProductActionsContainer;
