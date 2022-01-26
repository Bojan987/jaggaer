import { Badge, Grid, Icon } from "@mui/material";
import React from "react";
import iconFavorite from "../../resources/icons/favorite.svg";
import iconCart from "../../resources/icons/cart.svg";
import iconFactSoft from "../../resources/icons/facts-soft.svg";
import { useSelector } from "react-redux";

const gridStyle = {
  margin: "0 5px ",
  padding: "5px",
};

const Icons = () => {
  const cartItemNumber = useSelector((state) => state.cart);

  return (
    <Grid
      container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Grid item sx={{ ...gridStyle }}>
        <Icon>
          <img src={iconFavorite} />
        </Icon>
      </Grid>
      <Grid item sx={{ ...gridStyle }}>
        <Icon>
          <img src={iconFactSoft} />
        </Icon>
      </Grid>
      <Grid
        item
        sx={{
          ...gridStyle,
          borderLeft: "1px solid #EBEBEB",
          paddingLeft: "24px",
        }}
      >
        <Badge badgeContent={cartItemNumber} color="secondary">
          <Icon>
            <img src={iconCart} style={{ fill: "#EBEBEB" }} />
          </Icon>
        </Badge>
      </Grid>
    </Grid>
  );
};

export default Icons;
