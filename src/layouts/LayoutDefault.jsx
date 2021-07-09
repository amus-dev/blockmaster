import React, { useContext } from "react";
import ModalMovie from "../components/common/modal/ModalMovie";
import Movies from "../components/common/movie/Movies";
import Header from "../components/header";
import Slider from "../components/slider";
import { MoviesContext } from "../context/MoviesContext";

const LayoutDefault = () => {
  const { modalMovie } = useContext(MoviesContext);
  return (
    <>
      <Header />
      <Slider />
      <Movies />
      {modalMovie && <ModalMovie />}
    </>
  );
};

export default LayoutDefault;
