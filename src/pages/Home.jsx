import React from "react";
import { Container } from "react-bootstrap";
import LayoutHome from "../layouts/home/LayoutHome";
import LayoutMovies from "../layouts/movie/LayoutMovies";

const Home = () => {
  return (
    <Container fluid>
      <LayoutHome />
      <LayoutMovies />
    </Container>
  );
};

export default Home;
