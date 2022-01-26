import { Container } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import ProductPage from "./pages/ProductPage/ProductPage";

const App = () => {
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
