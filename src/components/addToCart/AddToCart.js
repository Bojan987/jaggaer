import { Button, Grid, Icon, TextField, Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/cartActions";
import iconAdd from "../../resources/icons/add.svg";

const AddToCart = forwardRef(() => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // handle input quantity
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const addIcon = (
    <Icon
      sx={{
        filter:
          "invert(100%) sepia(0%) saturate(2597%) hue-rotate(35deg) brightness(115%) contrast(107%)",
        fontSize: "4rem",
        marginBottom: "6px",
      }}
    >
      <img src={iconAdd} />
    </Icon>
  );

  return (
    <Grid container>
      <Grid item>
        <TextField
          size="small"
          sx={{
            width: "70px",
            marginRight: "5px",

            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          type="number"
          onChange={handleChange}
          value={quantity}
        />
        <Typography sx={{ display: "inline", marginRight: "15px" }}>
          PCE
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={addIcon}
          onClick={() => dispatch(addProduct(quantity))}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
});

export default AddToCart;
