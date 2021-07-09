import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={`/`} className="navbar__link">
            Todas
          </Link>
          <Link to={`/terror/27`} className="navbar__link">
            Terror
          </Link>
          <Link to={`/accion/28`} className="navbar__link">
            Acción
          </Link>
          <Link to={`/comedia/35`} className="navbar__link">
            Comedia
          </Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Menu;
