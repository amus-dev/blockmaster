import React, { useContext, useState } from "react";
import { Modal, Row, Col, Image, Alert } from "react-bootstrap";
import { MoviesContext } from "../../../context/MoviesContext";
import { getMovieVideoYT } from "../../../utils/api/movies";

import "./modalmovie.styles.scss";

const ModalMovie = () => {
  const [error, setError] = useState("");
  const { isOpenModalMovies, isVisibleModalMovie, modalMovie } =
    useContext(MoviesContext);
  const { id, poster_path, title, overview } = modalMovie;

  const openVideoYT = async (id) => {
    try {
      const data = await getMovieVideoYT(id);
      const { key } = data.results[0];
      window.open(`https://www.youtube.com/watch?v=${key}`);
    } catch (error) {
      setError("No existe video vinculado a esta pelicula.");
    }
  };
  return (
    <Modal
      show={isVisibleModalMovie}
      onHide={isOpenModalMovies}
      size="xl"
      className="modalMovie"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Row>
          <Col md={6}>
            <div className="modalMovie__image">
              <Image
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                fluid
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="modalMovie__info">
              <h2 className="modalMovie__info-title">{title}</h2>
              <p className="modalMovie__info-description">{overview}</p>
              <span
                className="modalMovie__info-btn"
                onClick={() => openVideoYT(id)}
              >
                Ver Ahora
              </span>
              {error && (
                <Alert
                  variant="danger"
                  onClose={() => setError("")}
                  dismissible
                >
                  {error}
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ModalMovie;
