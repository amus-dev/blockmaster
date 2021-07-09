import React, { useEffect, useContext, useState } from "react";
import { Row } from "react-bootstrap";
import "./movies.styles.scss";
import CardMovie from "./CardMovie";
import Paginate from "../paginate";
import { MoviesContext } from "../../../context/MoviesContext";
import { useParams } from "react-router-dom";

const Movies = () => {
  let { genre, id } = useParams();
  const { setDataMovies, movies, searchByGenre } = useContext(MoviesContext);
  useEffect(() => {
    if (genre) {
      searchByGenre(id);
    } else {
      setDataMovies();
    }
  }, [genre]);
  return (
    <section className="movies">
      <h1 className="movies__title">
        Todas las películas {genre && `de ${genre}`}
      </h1>
      <Row>
        {movies.map((movies, index) => (
          <CardMovie movie={movies} key={index} />
        ))}
        <Paginate />
      </Row>
    </section>
  );
};

export default Movies;
