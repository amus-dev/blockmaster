import React, { useContext } from "react";
import { Col, Image } from "react-bootstrap";
import "./cardmovie.style.scss";
import { MoviesContext } from "../../../context/MoviesContext";

const CardMovie = ({ movie }) => {
  const { isOpenModalMovies } = useContext(MoviesContext);
  const { poster_path, vote_average } = movie;

  const handleClickMovieModal = (movie) => {
    isOpenModalMovies(movie, true);
  };
  return (
    <Col md={3} xs={6}>
      <div className="cardMovie" onClick={() => handleClickMovieModal(movie)}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="cardMovie__cover"
          alt="Imagen Cover Pelicula"
          fluid
        />
        <div
          className={`cardMovie__score ${vote_average >= 7 ? "goodScore" : ""}`}
        >
          <i className="cardMovie__score-star" />
          <p className="cardMovie__score-number">{vote_average}</p>
        </div>
      </div>
    </Col>
  );
};

export default CardMovie;
