import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import ProductPage from "./pages/ProductPage/ProductPage";
import { getProduct } from "./redux/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ProductPage />
      </Container>
    </>
  );
};

export default App;
