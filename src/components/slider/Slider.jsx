import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getMoviesPopular, getMovieVideoYT } from "../../utils/api/movies";
import { Link } from "react-router-dom";
import "./slider.style.scss";

const Slider = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    setDataThirdTopMovies();
  }, []);

  const setDataThirdTopMovies = async () => {
    const data = await getMoviesPopular();
    const topThirdMovie = data.results.slice(0, 3);
    setTopMovies(topThirdMovie);
  };

  const openVideoYT = async (id) => {
    const data = await getMovieVideoYT(id);
    const { key } = data.results[0];
    window.open(`https://www.youtube.com/watch?v=${key}`);
  };

  return (
    <section className="carousel">
      <Carousel controls={false}>
        {topMovies.map((movie, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel__cover"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${movie.backdrop_path}")`,
              }}
            >
              <span
                className="carousel__cover-btn"
                onClick={() => openVideoYT(movie.id)}
              >
                Ver Ahora
              </span>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
