import { Grid, NativeSelect, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import Rating from "../rating/Rating";
import iconDicount from "../../resources/icons/discount.svg";
import AddToCart from "../addToCart/AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { isVisibleAction } from "../../redux/actions/cartActions";
import styled from "@emotion/styled";

const TypographyInline = styled(Typography)({
  display: "inline",
});

const TypographyBlock = styled(Typography)({
  display: "block",
});

const GridContainerStyled = styled(Grid)((props) => ({
  marginLeft: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  flexDirection: "column",
  minHeight: "100%",
}));

const ImageDiscountStyled = styled("img")({
  height: "1rem",
  marginLeft: "7px",
});

const GridItemFlex = styled(Grid)({
  display: "flex",
  alignItems: "center",
});

const SelectStyled = styled(NativeSelect)({
  marginTop: "13px",
});

const ProductActionsContainer = () => {
  const [rating, setRating] = useState(3);
  const dispatch = useDispatch();
  const { product: data } = useSelector((state) => state.product);
  // ref for AddToCart component to observe if its on screen view
  const ref = useRef();
  // intersection callback - dispatch action to observe if AddToCart is inside screen view
  const intersectionCallback = (entries) => {
    const [entry] = entries;

    dispatch(isVisibleAction(entry.isIntersecting));
  };
  // const state = useSelector((state) => state.isVisible);

  const options = {
    root: null,
    rootMargin: "0px",
    treshold: 1.0,
  };
  // observe ref with intersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  const handleChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <GridContainerStyled container>
      <Grid item>
        {data && data.article && (
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                {data.article.description_short}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TypographyInline variant="caption">by</TypographyInline>
              <TypographyInline variant="body2">
                {` Supplier ${data.article.supplier_name}`}
              </TypographyInline>
            </Grid>
            <GridItemFlex item xs={12}>
              <Rating value={rating} />
              <SelectStyled
                disableUnderline
                onChange={handleChange}
                value={rating}
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option value={rating} key={rating}>
                    {rating}
                  </option>
                ))}
              </SelectStyled>
            </GridItemFlex>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <TypographyInline variant="h5">
                {data.article.price.toLocaleString()}
              </TypographyInline>
              <TypographyInline variant="subtitle1">
                {` ${data.article.currency}`}
              </TypographyInline>
              <TypographyInline variant="caption">
                {` + ${data.article.transport_costs.toLocaleString()} shipping`}
              </TypographyInline>
              <ImageDiscountStyled src={iconDicount} />
              <TypographyBlock variant="caption">
                {`all prices inl.${data.article.vat_percent} % taxes`}
              </TypographyBlock>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} ref={ref}>
        <AddToCart />
      </Grid>
    </GridContainerStyled>
  );
};

export default ProductActionsContainer;
