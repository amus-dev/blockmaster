import React, { createContext, useState } from "react";
import { getMoviesPopular } from "../utils/api/movies";

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
        }}
      >
        {children}
      </MoviesContext.Provider>
    </div>
  );
};
