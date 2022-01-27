import { Grid, Typography } from "@mui/material";
import { formatPrice } from "../../utils/utils";
import React from "react";
import styled from "@emotion/styled";

const TypographyStyled = styled(Typography)({
  display: "inline",
  marginLeft: "10px",
});

const PriceBreak = ({ total, qty, currency, unit, discount }) => {
  const discountPerUnit = (total - discount) / qty;

  return (
    <Grid container>
      <TypographyStyled variant="subtitle1">{`ex ${qty} ${unit}`}</TypographyStyled>
      <TypographyStyled variant="subtitle1">{`${formatPrice(
        discountPerUnit
      )} ${currency}/${unit}`}</TypographyStyled>
    </Grid>
  );
};

export default PriceBreak;
