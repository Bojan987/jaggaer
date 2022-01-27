import { Grid, Icon, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import data from "../../resources/data/data.json";
import Rating from "../rating/Rating";
import iconDicount from "../../resources/icons/discount.svg";
import AddToCart from "../addToCart/AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { isVisibleAction } from "../../redux/actions/cartActions";

const ProductActionsContainer = () => {
  const dispatch = useDispatch();

  const ref = useRef();

  const intersectionCallback = (entries) => {
    const [entry] = entries;

    dispatch(isVisibleAction(entry.isIntersecting));
  };
  const state = useSelector((state) => state.isVisible);
  console.log(state);

  const options = {
    root: null,
    rootMargin: "0px",
    treshold: 1.0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

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
            <Typography sx={{ display: "inline" }} variant="h5">
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
      {/* <div ref={ref}> */}
      <Grid item xs={12} ref={ref}>
        <AddToCart />
      </Grid>
      {/* </div> */}
    </Grid>
  );
};

export default ProductActionsContainer;
