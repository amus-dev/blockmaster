import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import Slider from "../components/slider";

const Home = () => {
  return (
    <Container fluid>
      <Header />
      <Slider />
    </Container>
  );
};

export default Home;
