import React from "react";
import Movies from "../components/common/movie/Movies";
import Header from "../components/header";
import Slider from "../components/slider";

const LayoutDefault = () => {
  return (
    <>
      <Header />
      <Slider />
      <Movies />
    </>
  );
};

export default LayoutDefault;
