import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getMoviesNowPlaying, getMovieVideoYT } from "../../utils/api/movies";
import { BASE_URL_BANNER } from "../../utils/api/const";
import "./slider.style.scss";

const Slider = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    setDataThirdTopMovies();
  }, []);

  const setDataThirdTopMovies = async () => {
    const data = await getMoviesNowPlaying();
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
      <Carousel controls={false} fade={true} interval={4000}>
        {topMovies.map((movie, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel__cover"
              style={{
                backgroundImage: `url("${BASE_URL_BANNER}${movie.backdrop_path}")`,
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
