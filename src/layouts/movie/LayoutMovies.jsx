import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./layoutmovies.styles.scss";
import CardMovie from "../../components/common/movie/CardMovie";
import { getMoviesPopular } from "../../utils/api/movies";

const LayoutMovies = () => {
  const [moviesPopular, setMoviesPopular] = useState([]);
  useEffect(() => {
    setDataMovies();
  }, []);

  const setDataMovies = async () => {
    const data = await getMoviesPopular();
    setMoviesPopular(data.results);
  };
  return (
    <section className="movies">
      <h1 className="movies__title">Todas las peliculas</h1>
      <Row>
        {moviesPopular.map((movies, index) => (
          <CardMovie movie={movies} key={index} />
        ))}
      </Row>
    </section>
  );
};

export default LayoutMovies;
