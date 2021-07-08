import React from "react";
import LayoutHome from "../layouts/home/LayoutHome";
import LayoutMovies from "../layouts/movie/LayoutMovies";
import { useParams } from "react-router-dom";

const PopularMovies = (props) => {
  console.log(useParams());
  return (
    <>
      <LayoutHome />
      <LayoutMovies />
    </>
  );
};

export default PopularMovies;
