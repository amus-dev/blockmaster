import React, { createContext, useState } from "react";
import { getMoviesPopular } from "../utils/api/movies";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const setDataMovies = async (paginate) => {
    const data = await getMoviesPopular(paginate);
    setMovies(data.results);
  };
  return (
    <div>
      <MoviesContext.Provider
        value={{
          setDataMovies,
          movies,
        }}
      >
        {children}
      </MoviesContext.Provider>
    </div>
  );
};
