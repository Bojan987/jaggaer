import { Badge, Grid } from "@mui/material";
import React from "react";
import iconFavorite from "../../resources/icons/favorite.svg";
import iconCart from "../../resources/icons/cart.svg";
import iconFactSoft from "../../resources/icons/facts-soft.svg";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const GridContainerStyled = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5px",
});
const GridItemStyled = styled(Grid)({
  margin: "0 5px ",
  padding: "5px",
});

const GridItemCartStyled = styled(Grid)({
  margin: "0 5px ",
  padding: "5px",
  borderLeft: "1px solid #EBEBEB",
  paddingLeft: "24px",
});

const ImageStyled = styled("img")({
  height: "1.5rem",
});

const Icons = () => {
  const cartItemNumber = useSelector((state) => state.cart);

  return (
    <GridContainerStyled container>
      <GridItemStyled item>
        <ImageStyled src={iconFavorite} />
      </GridItemStyled>
      <GridItemStyled item>
        <ImageStyled src={iconFactSoft} />
      </GridItemStyled>
      <GridItemCartStyled item>
        <Badge badgeContent={cartItemNumber} color="secondary">
          <ImageStyled src={iconCart} />
        </Badge>
      </GridItemCartStyled>
    </GridContainerStyled>
  );
};

export default Icons;
