import React, { createContext, useState } from "react";
import {
  getMoviesPopular,
  getMovieBySearch,
  getMoviesByGenre,
} from "../utils/api/movies";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isVisibleModalMovie, setIsVisibleModalMovie] = useState(false);
  const [modalMovie, setModalMovie] = useState([]);

  const setDataMovies = async (paginate) => {
    const data = await getMoviesPopular(paginate);
    setMovies(data.results);
  };

  const isOpenModalMovies = (movie, visible) => {
    setIsVisibleModalMovie(visible);
    setModalMovie(movie);
  };

  const searchByMovie = async (movie) => {
    const data = await getMovieBySearch(movie);
    setMovies(data.results);
  };

  const searchByGenre = async (genre) => {
    const data = await getMoviesByGenre(genre);
    setMovies(data.results);
  };
  return (
    <div>
      <MoviesContext.Provider
        value={{
          setDataMovies,
          movies,
          isVisibleModalMovie,
          setIsVisibleModalMovie,
          isOpenModalMovies,
          modalMovie,
          searchByMovie,
          searchByGenre,
        }}
      >
        {children}
      </MoviesContext.Provider>
    </div>
  );
};
