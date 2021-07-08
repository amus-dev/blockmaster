import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import Slider from "../components/slider";

const LayoutPopulars = () => {
  return (
    <Container fluid>
      <Header />
      <Slider />
      <h1>Peliculas valoradas</h1>
    </Container>
  );
};

export default LayoutPopulars;
