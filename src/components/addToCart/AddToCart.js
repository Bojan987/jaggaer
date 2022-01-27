import styled from "@emotion/styled";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/cartActions";
import iconAdd from "../../resources/icons/add.svg";

const TextFieldStyled = styled(TextField)({
  width: "70px",
  marginRight: "5px",

  WebkitAppearance: "none",
  MozAppearance: "textfield",
});

const TypographyStyled = styled(Typography)({
  display: "inline",
  marginRight: "15px",
});

const ImageStyled = styled("img")({
  height: "20px",
});

const AddToCart = forwardRef(() => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // handle input quantity
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Grid container>
      <Grid item>
        <TextFieldStyled
          size="small"
          type="number"
          onChange={handleChange}
          value={quantity}
        />
        <TypographyStyled>PCE</TypographyStyled>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ImageStyled src={iconAdd} />}
          onClick={() => dispatch(addProduct(quantity))}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
});

export default AddToCart;
