import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import "./paginate.styles.scss";
import { MoviesContext } from "../../../context/MoviesContext";

const Paginate = () => {
  const { setDataMovies } = useContext(MoviesContext);
  const handlePageClick = (page) => {
    const { selected } = page;
    setDataMovies(selected + 1);
  };

  return (
    <div className="paginate">
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={5}
        pageRangeDisplayed={10}
        containerClassName={"pagination"}
        activeClassName={"active"}
        onPageChange={(page) => handlePageClick(page)}
        pageCount={500}
      />
    </div>
  );
};

export default Paginate;
