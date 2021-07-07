import React, { useState } from "react";
import "./search.styles.scss";

const Search = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpenMenu = (open) => {
    setOpen(open);
  };
  return (
    <>
      <button
        className="search__openSearch"
        onClick={() => handleClickOpenMenu(true)}
      />
      <form className={`search ${open ? "open" : ""}`}>
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
        />
        <button type="submit" className="search__btn" id="btnSearch" />
      </form>
    </>
  );
};

export default Search;
