import { Button, Container, Tooltip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import ProductPage from "./pages/ProductPage/ProductPage";
import { addProduct } from "./redux/actions/cartActions";

const App = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Container>
        <ProductPage />
      </Container>
      {/* <Tooltip title="Bojan faca">
        <Button onClick={() => dispatch(addProduct(5))}>Add to Cart</Button>
      </Tooltip>
      <div>{cart}</div> */}
    </>
  );
};

export default App;
