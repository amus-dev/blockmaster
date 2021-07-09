import React from "react";
import LayoutDefault from "../layouts/LayoutDefault";
import { useParams } from "react-router-dom";

const PopularMovies = () => {
  console.log(useParams());
  return (
    <>
      <LayoutDefault />
    </>
  );
};

export default PopularMovies;
