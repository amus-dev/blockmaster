import React, { useEffect, useContext } from "react";
import { Row } from "react-bootstrap";
import "./movies.styles.scss";
import CardMovie from "./CardMovie";
import Paginate from "../paginate";
import { MoviesContext } from "../../../context/MoviesContext";

const Movies = () => {
  const { setDataMovies, movies } = useContext(MoviesContext);
  useEffect(() => {
    setDataMovies();
  }, []);
  return (
    <section className="movies">
      <h1 className="movies__title">Todas las peliculas</h1>
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
