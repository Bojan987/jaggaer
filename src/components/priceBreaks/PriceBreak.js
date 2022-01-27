import { Grid, Typography } from "@mui/material";

import React from "react";

const PriceBreak = ({ total, qty, currency, unit, discount }) => {
  const discountPerUnit = (total - discount) / qty;
  const formatPrice = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Grid container>
      <Typography
        variant="subtitle1"
        sx={{ display: "inline", marginLeft: "10px" }}
      >{`ex ${qty} ${unit}`}</Typography>
      <Typography
        variant="subtitle1"
        sx={{ display: "inline", marginLeft: "15px" }}
      >{`${formatPrice(discountPerUnit)} ${currency}/${unit}`}</Typography>
    </Grid>
  );
};

export default PriceBreak;
