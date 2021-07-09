import React, { useState, useContext } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import "./search.styles.scss";

const Search = () => {
  const { searchByMovie, setDataMovies } = useContext(MoviesContext);
  const [open, setOpen] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const handleClickOpenMenu = (open) => {
    setOpen(open);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    searchByMovie(searchMovie);
  };

  const handleChangeInputSearch = (e) => {
    const { value } = e.target;
    value ? setSearchMovie(value) : setDataMovies();
  };
  return (
    <>
      <button
        className="search__openSearch"
        onClick={() => handleClickOpenMenu(true)}
      />
      <form
        className={`search ${open ? "open" : ""}`}
        onSubmit={handleSubmitSearch}
      >
        <span
          className="search__closeSearch"
          onClick={() => handleClickOpenMenu(false)}
        />
        <input
          type="text"
          name="inputSearch"
          id="inputSearch"
          className="search__input"
          placeholder="Busca tu pelicula favorita"
          onChange={handleChangeInputSearch}
        />
        <button type="submit" className="search__btn" id="btnSearch" />
      </form>
    </>
  );
};

export default Search;
