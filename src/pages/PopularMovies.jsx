import React from "react";
import LayoutPopulars from "../layouts/LayoutPopulars";
import { useParams } from "react-router-dom";

const PopularMovies = (props) => {
  console.log(useParams());
  return <LayoutPopulars />;
};

export default PopularMovies;
